
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
  const [isOpen, setIsOpen] = useState(false);

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

      const categorySuggestions = products
        .map(product => product.category)
        .filter((category, index, self) => self.indexOf(category) === index)
        .filter(category => category.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 2);

      setSuggestions([...productSuggestions, ...tagSuggestions, ...categorySuggestions]);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSelect = (suggestion: string) => {
    onSelect(suggestion);
    setQuery('');
    setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && query) {
      onSelect(query);
      setQuery('');
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full">
      <Command className="rounded-lg border shadow-md bg-background">
        <CommandInput
          placeholder={placeholder}
          value={query}
          onValueChange={setQuery}
          onKeyPress={handleKeyPress}
          className="border-0"
        />
        {isOpen && suggestions.length > 0 && (
          <CommandList className="absolute top-full left-0 right-0 z-50 bg-background border border-t-0 rounded-b-lg shadow-lg max-h-60 overflow-y-auto">
            <CommandGroup heading="Suggestions">
              {suggestions.map((suggestion, index) => (
                <CommandItem
                  key={index}
                  onSelect={() => handleSelect(suggestion)}
                  className="cursor-pointer hover:bg-muted px-3 py-2"
                >
                  <Search className="mr-2 h-4 w-4" />
                  {suggestion}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
        {isOpen && suggestions.length === 0 && query.length > 0 && (
          <CommandList className="absolute top-full left-0 right-0 z-50 bg-background border border-t-0 rounded-b-lg shadow-lg">
            <CommandEmpty>No results found.</CommandEmpty>
          </CommandList>
        )}
      </Command>
    </div>
  );
};

export default SearchDropdown;
