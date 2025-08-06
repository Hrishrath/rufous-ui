import React, { useState } from "react";
import { Button, FloatingInput, useCustomTheme, APP_THEMES } from "rufous-ui"; // adjust path if local
import "../styles/rufous-showcase.css";

const RufousShowcase = () => {
  const [name, setName] = useState("");
  const { previewTheme, theme } = useCustomTheme();

  return (
    <div
      className="rufous-showcase"
      style={{ background: theme?.customStyles?.backgroundColor }}
    >
      <header className="showcase-header">
        <h1>🎨 Rufous UI</h1>
        <p>Custom UI component library showcase</p>
      </header>

      <section className="component-section">
        <h2>🧱 Button</h2>
        <Button onClick={() => alert("Rufous Button clicked!")}>
          Click Me
        </Button>
        <pre>
          <code>{`<Button onClick={() => alert("Rufous Button clicked!")}>Click Me</Button>`}</code>
        </pre>
      </section>

      <section className="component-section">
        <h2>✍️ Floating Input</h2>
        <FloatingInput
          label="Your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <pre style={{ textAlign: "left" }}>
          <code>{`<FloatingInput
  label="Your Name"
  name="name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
/>`}</code>
        </pre>
      </section>
      <section className="component-section">
        <h2>✍️ Theme Provider</h2>
        <Button
          onClick={() => previewTheme(APP_THEMES.default.name.toLowerCase())}
          style={{
            marginRight: "5px",
          }}
        >
          Default
        </Button>
        <Button
          onClick={() => previewTheme(APP_THEMES.rufous.name.toLowerCase())}
          style={{
            marginLeft: "5px",
          }}
        >
          Rufous
        </Button>
        <pre style={{ textAlign: "left" }}>
          <code>{`<CustomThemeProvider>
{children}
</CustomThemeProvider>`}</code>
        </pre>
      </section>
    </div>
  );
};

export default RufousShowcase;
