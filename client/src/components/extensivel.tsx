"use client";
import { useState, useEffect } from "react";

interface ExtensivelItem {
    label: string;
    content: React.ReactNode;
}

interface ExtensivelProps {
    title: string;
    icon: string;
    items: ExtensivelItem[];
    defaultOpen?: boolean;
    onSelectItem: (content: React.ReactNode) => void;
    selectedIndex?: number;
}

export default function Extensivel({ title, icon, items, defaultOpen = false, onSelectItem, selectedIndex = 0 }: ExtensivelProps) {
    const [aberto, setAberto] = useState(defaultOpen);
    const [selected, setSelected] = useState(selectedIndex);

    useEffect(() => {
        if (defaultOpen) onSelectItem(items[selectedIndex].content);
    }, [defaultOpen, selectedIndex, onSelectItem, items]);

    function handleClick(idx: number) {
        setSelected(idx);
        onSelectItem(items[idx].content);
    }

    return (
        <div className="extensivel">
            <div
                className="extensivel-header"
                onClick={() => setAberto(!aberto)}
                style={{ userSelect: "none" }}
            >
                <i className={`bx ${icon}`} style={{ fontSize: "20px" }}></i>
                <p>{title}</p>
            </div>
            <div className={`extensivel-content${aberto ? " open" : ""}`}>
                <div>
                    {items.map((item, idx) => (
                        <div
                            className={`lista${selected === idx ? " selected" : ""}`}
                            key={idx}
                            onClick={() => handleClick(idx)}
                        >
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
