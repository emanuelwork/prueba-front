import { useState } from "react";
import BasicData from "./components/Forms/BasicData";
import Goals from "./components/Forms/Goals";
import MedicalHistory from "./components/Forms/MedicalHistory";
import Welcome from "./components/Welcome";
import FormLayout from "./layouts/Form.Layout";

function App() {
  const [formPage, setFormPage] = useState(1);
  return (
    <main>
      <Welcome page={2} />
      <FormLayout>
        {formPage === 1 ? (
          <BasicData setFormPage={setFormPage} />
        ) : formPage === 2 ? (
          <Goals setFormPage={setFormPage} />
        ) : (
          <MedicalHistory setFormPage={setFormPage} />
        )}
      </FormLayout>
    </main>
  );
}

export default App;
