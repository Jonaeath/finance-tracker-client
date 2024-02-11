import React, { useState } from "react";

const TransactionForm = () => {
  const [values, setValues] = useState({
    name: "",
    income: "",
    expense: "",
    category: "",
    amount: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to add transaction");
      }

      const data = await response.json();
      console.log(data);

      setValues({
        name: "",
        income: "",
        category: "",
        amount: "",
      });
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setValues({ ...values, category });
  };

  return (
    <div>
      <div className="hero min-h-screen mt-1 bg-base-200">
        <div className="card flex-shrink-0 w-4/12 shadow-2xl bg-base-100">
          <form onSubmit={handelSubmit} className="card-body">
            <h1 className="text-center uppercase text-xl">Transaction</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Income</span>
              </label>
              <input
                type="number"
                name="income"
                placeholder="Income"
                className="input input-bordered"
                required
                value={values.income}
                onChange={(e) =>
                  setValues({ ...values, income: e.target.value })
                }
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Expense</span>
              </label>
              <input
                type="text"
                name="expense"
                placeholder="How do you allocate your income for expenses?"
                className="input input-bordered text-bold"
                readOnly
                onChange={(e) =>
                  setValues({ ...values, expense: e.target.value })
                }
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                value={values.category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="select select-bordered"
              >
                <option>Select</option>
                <option value="buyFood">Buy Food</option>
                <option value="buyLaptop">Buy Laptop</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Amount</span>
              </label>
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                className="input input-bordered"
                required
                value={values.amount}
                onChange={(e) =>
                  setValues({ ...values, amount: e.target.value })
                }
              />
            </div>
            <div className="text-center mt-6">
              <button className="btn btn-success uppercase w-1/2 bg-lime-500">
                Add Transaction
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
