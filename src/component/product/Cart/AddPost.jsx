import React, { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
    const [formData, setFormData] = useState({
        location: '',
        food_name: '',
        food_description: '',
        vegetarian: false,
        expiry_time: '',
        quantity_available: '',
        unit: '',
        delivery_time: '',
        price: '',
        amount: '',
        foodImg: null
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            img: file ? URL.createObjectURL(file) : null
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const location = formData.location;
        if (!location) {
            alert("Please select a location.");
            return;
        }

        try {
            await axios.post(`http://localhost:3000/${location}`, formData);
            alert("Post added successfully to " + location);
        } catch (err) {
            console.error("Error adding post:", err);
            alert("Failed to add post.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">Create New Post</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {/* Location Selection */}
                                <div className="mb-3">
                                    <label htmlFor="location" className="form-label">Select Location</label>
                                    <select
                                        className="form-select"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">-- Choose a location --</option>
                                        <option value="trichy">cuddalore</option>
                                        <option value="madurai">madurai</option>
                                        <option value="coimbatore">nagapattinam</option>
                                        <option value="chennai">chennai</option>
                                        <option value="chennai">dindugal</option>
                                    </select>
                                </div>

                                {/* Image Upload */}
                                <div className="mb-3">
                                    <label htmlFor="imageUpload" className="form-label">Item Image</label>
                                    <input 
                                        type="file" 
                                        className="form-control" 
                                        id="imageUpload" 
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        required
                                    />
                                </div>

                                {/* Item Name */}
                                <div className="mb-3">
                                    <label htmlFor="itemName" className="form-label">Item Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="itemName" 
                                        name="itemName"
                                        value={formData.itemName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Description */}
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea 
                                        className="form-control" 
                                        id="description" 
                                        name="description"
                                        rows="3"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <div className="row">
                                    {/* Category */}
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Category</label>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="category"
                                                name="category"
                                                checked={formData.category}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="category">
                                                Vegetarian
                                            </label>
                                        </div>
                                    </div>

                                    {/* Expiry Time */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="expire" className="form-label">Expiry Time</label>
                                        <input 
                                            type="datetime-local" 
                                            className="form-control" 
                                            id="expire" 
                                            name="expire"
                                            value={formData.expire}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    {/* Quantity */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="quantity" className="form-label">Available Quantity</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="quantity" 
                                            name="quantity"
                                            min="1"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Weight */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="weight" className="form-label">Weight (grams)</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="weight" 
                                            name="weight"
                                            min="1"
                                            value={formData.weight}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    {/* Delivery Time */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="deliveryTime" className="form-label">Delivery Within (hours)</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="deliveryTime" 
                                            name="deliveryTime"
                                            min="1"
                                            value={formData.deliveryTime}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Original Amount */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="orgAmount" className="form-label">Original Price ($)</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            id="orgAmount" 
                                            name="orgAmount"
                                            min="0"
                                            step="0.01"
                                            value={formData.orgAmount}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Discounted Amount */}
                                <div className="mb-4">
                                    <label htmlFor="amount" className="form-label">Discounted Price ($)</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        id="amount" 
                                        name="amount"
                                        min="0"
                                        step="0.01"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-success btn-lg">Create Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;
