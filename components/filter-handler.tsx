import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { LABEL } from "../lib/design-system";

const FilterHandler: () => EmotionJSX.Element = () => {
  return (
    <div>
      <LABEL htmlFor="keyword">Search</LABEL>
      <input
        type="text"
        name="keyword"
        id="keyword"
        autoComplete="off"
        placeholder="Search..."
      />
      <LABEL htmlFor="gender">Gender</LABEL>
      <select id="gender" name="gender">
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default FilterHandler;
