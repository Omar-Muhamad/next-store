import CategoriesFilter from "./CategoriesFilter";
import PriceFilter from "./PriceFilter";

export default function SideFilters() {
  return (
    <aside className="flex flex-col bg-lightGray h-full w-full">
      <CategoriesFilter />
      <PriceFilter />
    </aside>
  );
}
