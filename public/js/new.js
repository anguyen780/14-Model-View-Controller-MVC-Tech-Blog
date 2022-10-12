const newPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#title-input").value.trim();
    const body = document.querySelector("#body-input").value.trim();
  
    if (title && body) {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, body }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to create new post.");
      }
    }
  };
  
  document.querySelector("#new-post-form").addEventListener("submit", newPostHandler);
  