import React, { useState } from "react";
import axios from "axios";

interface cityData {
    name: string;
}

interface CityFormProps {
    onCityData: () => void;
}

export default function UserForm({
    onCityData,
}: Readonly<CityFormProps>) {
    const [formData, setFormData] = useState<cityData>({
        name: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.get("https://api.weatherapi.com/v1/current.json?key=83ec500b1d684130b61144058252207&q=Bogota&aqi=no", {
                params: {
                    key: "83ec500b1d684130b61144058252207",
                    aqi: 'no',
                    q: formData.name
                }
            });
            onCityData();
            setFormData({ name: ""});
        } catch (error) {
            console.error("Error getting data:", error);
        }
    };

    const inputStyles =
        "w-full p-3 bg-[#3c3c3c] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow";

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-96">
            <input
                name="name"
                value={formData.name}
                placeholder="City Name"
                onChange={handleChange}
                className={inputStyles}
                required
            />{" "}
            <button
                type="submit"
                className="w-full p-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#282828] transition-colors"
            >
                Search data{" "}
            </button>{" "}
        </form>
    );
}