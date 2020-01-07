import React, { useState } from "react";

interface PanelProps {
  title: string;
  defaultCollapsed?: boolean;
}

export const Panel: React.FC<PanelProps> = ({
  title,
  children,
  defaultCollapsed = false
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  return (
    <div className="panel">
      <h4>{title}</h4>
      <button
        className="btn-panel-collapse"
        type="button"
        onClick={e => {
          e.preventDefault();
          setCollapsed(collapsed => !collapsed);
        }}
      >
        {collapsed ? "▲" : "▼"}
      </button>
      {!collapsed && <div className="panelColumn">{children}</div>}
    </div>
  );
};
