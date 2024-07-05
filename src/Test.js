import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const ImportEmployees = () => {
  const { register, handleSubmit, reset } = useForm();
  const [responseMessage, setResponseMessage] = React.useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("grade", data.grade);
    formData.append("toe", data.toe);
    formData.append("ocontamt", data.ocontamt);
    formData.append("ncontamt", data.ncontamt);
    formData.append("pension_amount", data.pension_amount);
    formData.append("empcntb", data.empcntb);
    formData.append("assignDate", data.assignDate);

    try {
      const response = await axios.post(
        "https://pentechpro.ajinkyatechnologies.in/api/posts/importemployees",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResponseMessage(
        response.data.message || "Employees imported successfully"
      );
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "Error importing employees"
      );
    } finally {
      reset();
    }
  };

  return (
    <div>
      <h1>Import Employees</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>File</label>
          <input type="file" {...register("file", { required: true })} />
        </div>
        <div>
          <label>Grade</label>
          <input type="text" {...register("grade", { required: true })} />
        </div>
        <div>
          <label>TOE</label>
          <input type="text" {...register("toe", { required: true })} />
        </div>
        <div>
          <label>O Cont Amount</label>
          <input type="number" {...register("ocontamt", { required: true })} />
        </div>
        <div>
          <label>N Cont Amount</label>
          <input type="number" {...register("ncontamt", { required: true })} />
        </div>
        <div>
          <label>Pension Amount</label>
          <input
            type="number"
            {...register("pension_amount", { required: true })}
          />
        </div>
        <div>
          <label>Emp Cnt B</label>
          <input type="number" {...register("empcntb", { required: true })} />
        </div>
        <div>
          <label>Assign Date</label>
          <input type="date" {...register("assignDate", { required: true })} />
        </div>
        <button type="submit">Import Employees</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ImportEmployees;
