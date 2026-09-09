import useReveal from "../../hooks/useReveal.js";
import "./Reveal.css";

export default function Reveal({ children, className = "", as: Tag = "div", ...rest }) {
  const [ref, visible] = useReveal();

  return (
    <Tag ref={ref} className={`reveal ${visible ? "in" : ""} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
