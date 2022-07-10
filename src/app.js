import React from "react";
import Header from "./header";
import Places from "./places";
import data from "./data"

export default function App() {
    const places = data.map(item => {
        return (
    <Places
        key = {item.id}
        {...item}
    />
)    
})
    return (
        <div>
            <div className="container">
                <Header />
                <section className="place-list">
                    {places}    
                </section>  
            </div>
        </div>
    )
}