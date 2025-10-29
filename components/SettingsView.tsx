import React, { useState } from 'react';
import type { BotSettings } from '../types';

const SettingsView: React.FC = () => {
    const [settings, setSettings] = useState<BotSettings>({
        tone: 'Casual',
        language: 'Mixed',
        autoReplyEnabled: true,
    });

    const handleToggle = (key: keyof BotSettings) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSettings(prev => ({...prev, [name]: value}));
    };

    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold text-textPrimary mb-6">Settings</h1>
            <div className="max-w-2xl mx-auto space-y-8">
                
                <div className="bg-surface rounded-lg border border-border p-6">
                    <h2 className="text-xl font-semibold mb-1 text-textPrimary">Bot Personality</h2>
                    <p className="text-textSecondary mb-4">Customize how your bot interacts with customers.</p>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="tone" className="block text-sm font-medium text-textSecondary mb-1">Conversation Tone</label>
                            <select 
                                id="tone"
                                name="tone"
                                value={settings.tone}
                                onChange={handleSelectChange}
                                className="w-full p-2 border border-border rounded-lg bg-background text-textPrimary focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            >
                                <option>Casual</option>
                                <option>Formal</option>
                                <option>Humorous</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="language" className="block text-sm font-medium text-textSecondary mb-1">Primary Language</label>
                            <select 
                                id="language"
                                name="language"
                                value={settings.language}
                                onChange={handleSelectChange}
                                className="w-full p-2 border border-border rounded-lg bg-background text-textPrimary focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            >
                                <option>Bangla</option>
                                <option>English</option>
                                <option>Mixed</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="bg-surface rounded-lg border border-border p-6">
                    <h2 className="text-xl font-semibold mb-1 text-textPrimary">Automation</h2>
                    <p className="text-textSecondary mb-4">Control the bot's automated behaviors.</p>
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium text-textPrimary">Enable Auto-Reply</h3>
                            <p className="text-sm text-textSecondary">Let the bot reply to incoming messages automatically.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked={settings.autoReplyEnabled} onChange={() => handleToggle('autoReplyEnabled')} className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary/30 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
                 
                <div className="text-right">
                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-200 hover:scale-105">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsView;