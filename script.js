document.getElementById("student-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    id: form.id.value,
    course: form.course.value,
    year: form.year.value,
    marks: form.marks.value
  };

  const res = await fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert("Data submitted successfully!");
    form.reset();
  } else {
    alert("Submission failed!");
  }
});
