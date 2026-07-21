import styles from "./CohortDetails.module.css";

function CohortDetails({ name, mentor, startDate, currentStatus, coach }) {
  return (
    <div className={styles.box}>
      <h3
        style={{
          color: currentStatus === "ongoing" ? "green" : "blue",
        }}
      >
        {name}
      </h3>

      <dl>
        <dt>Mentor</dt>
        <dd>{mentor}</dd>

        <dt>Start Date</dt>
        <dd>{startDate}</dd>

        <dt>Status</dt>
        <dd>{currentStatus}</dd>

        <dt>Coach</dt>
        <dd>{coach}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;