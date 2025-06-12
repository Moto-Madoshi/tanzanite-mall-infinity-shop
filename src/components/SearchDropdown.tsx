
import React, { useState, useEffect } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { products } from '@/data/products';
import { Search } from 'lucide-react';

interface SearchDropdownProps {
  onSelect: (query: string) => void;
  placeholder?: string;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ onSelect, placeholder = "Search products..." }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (query.length > 0) {
      const productSuggestions = products
        .filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        )
        .slice(0, 5)
        .map(product => product.name);

      const tagSuggestions = products
        .flatMap(product => product.tags)
        .filter(tag => tag.toLowerCase().includes(query.toLowerCase()))
        .filter((tag, index, self) => self.indexOf(tag) === index)
        .slice(0, 3);

      setSuggestions([...productSuggestions, ...tagSuggestions]);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput
        placeholder={placeholder}
        value={query}
        onValueChange={setQuery}
        className="border-0"
      />
      {suggestions.length > 0 && (
        <CommandList>
          <CommandGroup heading="Suggestions">
            {suggestions.map((suggestion, index) => (
              <CommandItem
                key={index}
                onSelect={() => {
                  onSelect(suggestion);
                  setQuery('');
                }}
                className="cursor-pointer"
              >
                <Search className="mr-2 h-4 w-4" />
                {suggestion}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      )}
    </Command>
  );
};

export default SearchDropdown;
