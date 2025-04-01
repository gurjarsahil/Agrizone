from flask import Flask, request, render_template, jsonify
import numpy as np
import pandas
import sklearn
import pickle
import os

# importing model
model = pickle.load(open('model.pkl','rb'))
sc = pickle.load(open('standscaler.pkl','rb'))
ms = pickle.load(open('minmaxscaler.pkl','rb'))

# creating flask app
app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/about.html')
def about():
    return app.send_static_file('about.html')

@app.route('/recommend.html')
def recommend():
    return app.send_static_file('recommend.html')

@app.route("/predict", methods=['POST'])
def predict():
    try:
        # Get form data
        N = int(request.form.get('Nitrogen', 0))
        P = int(request.form.get('Phosphorus', 0))
        K = int(request.form.get('Potassium', 0))
        temp = float(request.form.get('Temperature', 0))
        humidity = float(request.form.get('Humidity', 0))
        ph = float(request.form.get('pH', 0))
        rainfall = float(request.form.get('Rainfall', 0))

        # Process data
        feature_list = [N, P, K, temp, humidity, ph, rainfall]
        single_pred = np.array(feature_list).reshape(1, -1)

        scaled_features = ms.transform(single_pred)
        final_features = sc.transform(scaled_features)
        prediction = model.predict(final_features)

        crop_dict = {1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
                    8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
                    14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
                    19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}

        if prediction[0] in crop_dict:
            crop = crop_dict[prediction[0]]
            result = {"success": True, "crop": crop}
        else:
            result = {"success": False, "error": "Could not determine the best crop"}
        
        return jsonify(result)
    
    except Exception as e:
        app.logger.error(f"Error in prediction: {str(e)}")
        return jsonify({"success": False, "error": str(e)}), 500

# Serve static files
@app.route('/<path:path>')
def serve_static(path):
    if os.path.exists(path):
        return app.send_static_file(path)
    return app.send_static_file('index.html')

# python main
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)