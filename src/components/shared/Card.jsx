import PropTypes from "prop-types";

function Card({ children, reverse }) {
  // Conditional class
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

  return (
    <div
      className="card"
      // Conditional styling
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

// Props to change the background and text colors
Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
