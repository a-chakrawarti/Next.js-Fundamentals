// Styled-JSX: Component level style

import styles from "./style.module.css";

const Tagline = () => {
  const selectedColor = "orange";
  return (
    <div>
      <p className={`heading ${styles.smallcase}`}>Nothing to see here...</p>

      {/* Applies the jsx globally, initially was component level */}
      <style jsx global>
        {`
          .heading {
            letter-spacing: 0.2rem;
            color: ${selectedColor}; // Can use variables
          }
        `}
      </style>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <h1 className="heading">Homepage</h1>
      <style jsx>{`
        .heading {
          color: red;
        }
      `}</style>
      <Tagline />
    </div>
  );
}
