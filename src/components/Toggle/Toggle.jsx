import "./Toggle.css";
import SUN from "../../assets/sun.png";
import MOON from "../../assets/moon.png";

export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label className="dark_mode_label" for="darkmode-toggle">
        <img src={MOON} alt="" className="dark_mode_label-pic moon-pic" />
        <img src={SUN} alt="" className="dark_mode_label-pic sun-pic" />
      </label>
    </div>
  );
};
export default Toggle;
