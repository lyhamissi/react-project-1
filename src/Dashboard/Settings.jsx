import React, { useState } from "react";
import './dashboard_styles/settings.css';
const Settings = () => {
    const [settings, setSettings] = useState({
        follows: true,
        answers: false,
        mentions: false,
        launches: false,
        updates: true,
        newsletter: false,
    });

    const toggleSetting = (key) => {
        setSettings({ ...settings, [key]: !settings[key] });
    };

    return (
        <div>
            <h2 className="settings-title">Platform Settings</h2>
            <div className="settings-container">


                <div>
                    <h3 className="settings-category">Account</h3>
                    <div className="settings-group">
                        {renderSwitch("Email me when customer follows me", "follows")}
                        {renderSwitch("Email me when customer answers on my post", "answers")}
                        {renderSwitch("Email me when customer mentions me", "mentions")}
                    </div>
                </div>
            </div>
        </div>
    );

    function renderSwitch(label, key) {
        return (
            <label className="settings-switch">
                <span className="switch-label">{label}</span>
                <input
                    type="checkbox"
                    checked={settings[key]}
                    onChange={() => toggleSetting(key)}
                    className="hidden-checkbox"
                />
                <div className={`toggle-switch ${settings[key] ? "active" : ""}`}>
                    <div className="switch-handle"></div>
                </div>
            </label>
        );
    }
};

export default Settings;
