import { useNavigate, useLocation } from "react-router";
import { useCallback } from "react";


export  function TransitionLink({
  to,
  onBeforeNavigate,
  children,
  className = "",
  ...rest
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = useCallback(
    async (e) => {
      e.preventDefault();
      if (onBeforeNavigate) {
        await onBeforeNavigate();
      }
      if (location.pathname !== to) {
        navigate(to);
      }
    },
    [navigate, to, onBeforeNavigate, location.pathname]
  );

  const isActive = location.pathname === to;
  const combinedClass = className + (isActive ? " active" : "");
  return (
    <a href={to} className={combinedClass} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
