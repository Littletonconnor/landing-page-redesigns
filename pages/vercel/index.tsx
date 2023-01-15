import styles from "./index.module.css";

function VercelLandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero_texts}>
        <h1 className={styles.hero_title}>
          <span
            style={
              {
                "--content": '"Develop."',
                "--start-color": "#007CF0",
                "--end-color": "#00DFD8",
              } as any
            }
            className={styles.animated_gradient_background}
          >
            <span
              className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground1}`}
            >
              Develop.
            </span>
          </span>
          <span
            style={
              {
                "--content": '"Preview."',
                "--start-color": "#7928CA",
                "--end-color": "#FF0080",
              } as any
            }
            className={styles.animated_gradient_background}
          >
            <span
              className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground2}`}
            >
              Preview.
            </span>
          </span>
          <span
            style={
              {
                "--content": '"Ship."',
                "--start-color": "#FF4D4D",
                "--end-color": "#F9CB28",
              } as any
            }
            className={styles.animated_gradient_background}
          >
            <span
              className={`${styles.animated_gradient_foreground} ${styles.animated_gradient_foreground3}`}
            >
              Ship.
            </span>
          </span>
        </h1>
        <h2 className={styles.hero_description}>
          Vercel is the platform for frontend developers, providing the speed
          and reliability innovators need to create at the moment of
          inspiration.
        </h2>
        <div className={styles.hero_buttons}>
          <div className={styles.hero_button_item}>
            <a
              className={`${styles.button} ${styles.button_primary}`}
              role="button"
            >
              <span className={styles.button_content}>
                <svg
                  aria-label="Vercel Logo"
                  fill="currentColor"
                  viewBox="0 0 75 65"
                  height="15.600000000000001"
                  width="18"
                >
                  <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                </svg>
                <span>Start deploying</span>
              </span>
            </a>
          </div>
          <div className={styles.hero_button_item}>
            <div className={styles.hero_gradient_button_wrapper}>
              <span
                style={
                  {
                    "--start-color": "#007CF0",
                    "--end-color": "#00DFD8",
                  } as any
                }
                className={`${styles.hero_button_bg} ${styles.animated_gradient_foreground1}`}
              />
              <span
                style={
                  {
                    "--start-color": "#7928CA",
                    "--end-color": "#FF0080",
                  } as any
                }
                className={`${styles.hero_button_bg} ${styles.animated_gradient_foreground2}`}
              />
              <span
                style={
                  {
                    "--start-color": "#FF4D4D",
                    "--end-color": "#F9CB28",
                  } as any
                }
                className={`${styles.hero_button_bg} ${styles.animated_gradient_foreground3}`}
              />
              <a
                className={`${styles.button} ${styles.button_secondary}`}
                role="button"
              >
                <span className={styles.button_content}>Get a Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VercelLandingPage;
