import { useState } from "react";
import { PropertyCard } from "./components/PropertyCard";
import { SearchInput } from "./components/SearchInput";
import properties from "./data/properties.json";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold">Available Properties</h1>
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </div>

        {filteredProperties.length === 0 ? (
          <div className="rounded-lg bg-white p-8 text-center">
            <p className="text-lg text-muted-foreground">
              No properties found matching your search criteria.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;