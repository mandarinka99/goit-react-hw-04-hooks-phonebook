import styles from "./Container.module.css";
import PropTypes from "prop-types";

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.array.isRequired
}

export default Container;
