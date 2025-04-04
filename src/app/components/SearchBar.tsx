'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Search, ScanBarcode } from 'lucide-react';

interface SearchBarProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    onSuggestionClick?: (val: string) => void;
    onEnterPress?: (val: string) => void;
    onBarcodeClick?: () => void;
}

const cache: { [key: string]: string[] } = {};

const fetchSuggestions = async (query: string): Promise<string[]> => {
    if (cache[query]) {
        return cache[query];
    }

    const response = await fetch(`/api/autocomplete?expression=${encodeURIComponent(query)}`);
    const data = await response.json();
    cache[query] = data.suggestions;
    return data.suggestions;
};

const SearchBar: React.FC<SearchBarProps> = ({ value = '', onChange, placeholder, onSuggestionClick , onEnterPress,onBarcodeClick}) => {
    const [input, setInput] = useState(value);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (input.trim() === '') {
            setSuggestions([]);
            return;
        }

        timerRef.current = setTimeout(async () => {
            const fetchedSuggestions = await fetchSuggestions(input);
            setSuggestions(fetchedSuggestions);
        }, 300); // Debounce API calls
    }, [input]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInput(val);
        onChange?.(val);
    };

    return (
        <>
            <div className="flex flex-wrap gap-2 mb-2 px-4 text-black">
                {suggestions.map((kw, idx) => (
                    <span
                        key={idx}
                        onClick={() => {
                            setInput(kw);
                            onChange?.(kw);
                            setSuggestions([]);
                            onSuggestionClick?.(kw)
                        }}
                        className="text-xs bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full cursor-pointer transition-colors"
                    >
                        {kw}
                    </span>
                ))}
            </div>
            <div className="relative mx-4">
                <div className="flex items-center justify-between bg-white rounded-full px-4 py-2 shadow-md text-black">
                    <div className="flex items-center space-x-2 w-full">
                        <Search className="w-5 h-5 text-blue-600" />
                        <input
                            type="text"
                            value={input}
                            onChange={handleChange}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onEnterPress?.(input);
                                }
                                console.log("pressed", input);
                            }}
                            placeholder={placeholder || "Search for a food"}
                            className="outline-none bg-transparent text-sm w-full placeholder-gray-500"
                        />
                    </div>
                    <ScanBarcode className="w-5 h-5 text-blue-600" onClick={onBarcodeClick} />
                </div>
            </div>
        </>
    );
};

export default SearchBar;