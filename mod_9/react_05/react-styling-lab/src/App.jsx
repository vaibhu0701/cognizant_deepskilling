import CohortDetails from "./components/CohortDetails";

function App() {
  return (
    <div>
      <h1>Cognizant Academy Dashboard</h1>

      <CohortDetails
        name="React Cohort"
        mentor="John"
        startDate="01-Jul-2026"
        currentStatus="ongoing"
        coach="David"
      />

      <CohortDetails
        name="Angular Cohort"
        mentor="Smith"
        startDate="15-Jun-2026"
        currentStatus="completed"
        coach="Mary"
      />

      <CohortDetails
        name="Java Cohort"
        mentor="Robert"
        startDate="20-May-2026"
        currentStatus="ongoing"
        coach="Steve"
      />
    </div>
  );
}

export default App;