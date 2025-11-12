import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
    createdAt: "",
    updatedAt: "",
  });

  const [theme, setTheme] = useState("light");
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [greeting, setGreeting] = useState("");
  const [loginCount, setLoginCount] = useState(0);

  // 🕒 Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());

      const hour = now.getHours();
      if (hour < 12) setGreeting(" Good Morning");
      else if (hour < 18) setGreeting("Good Afternoon");
      else setGreeting(" Good Evening");
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  //  Load user and preferences
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedCount = parseInt(localStorage.getItem("loginCount")) || 0;

    if (!savedUser) {
      navigate("/login");
    } else {
      setUser(savedUser);
      setTheme(savedTheme);
      setLoginCount(savedCount + 1);
      localStorage.setItem("loginCount", savedCount + 1);
    }
  }, [navigate]);

  //  Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //  Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  //  Save updates
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, updatedAt: new Date().toLocaleString() };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert(" Account updated successfully!");
  };

  //  Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // 🗑 Delete account
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      localStorage.removeItem("user");
      localStorage.removeItem("loginCount");
      alert("🗑 Account deleted successfully!");
      navigate("/register");
    }
  };

  //  Logout
  const handleLogout = () => {
    alert(" Logged out successfully!");
    navigate("/login");
  };

  // Clear local storage
  const handleClearStorage = () => {
    if (window.confirm("Clear all saved data and settings?")) {
      localStorage.clear();
      alert("Local storage cleared!");
    }
  };

  return (
    <div
      className={`container mt-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"} p-4 rounded shadow`}
      style={{
        transition: "all 0.5s ease-in-out",
        minHeight: "100vh",
      }}
    >
      <div className="card p-4 shadow col-md-8 mx-auto border-0">
        <h3 className="text-center mb-2">{greeting}, {user.username || "User"}!</h3>
        <p className="text-center text-muted"> {time}</p>

        {/* Profile Picture */}
        <div className="text-center mb-3">
          {user.image ? (
            <img
              src={user.image}
              alt="Profile"
              className="rounded-circle border border-3 border-primary mb-2"
              width="100"
              height="100"
            />
          ) : (
            <div
              className="rounded-circle bg-secondary d-inline-block mb-2"
              style={{ width: "100px", height: "100px" }}
            />
          )}
          <input type="file" className="form-control mt-2" onChange={handleImageChange} />
        </div>

        {/* Form Section */}
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-2">
             Update Account
          </button>

          <button type="button" className="btn btn-secondary w-100 mb-2" onClick={toggleTheme}>
            {theme === "light" ? " Enable Dark Mode" : " Switch to Light Mode"}
          </button>

          <button type="button" className="btn btn-danger w-100 mb-2" onClick={handleDelete}>
             Delete Account
          </button>

          <button type="button" className="btn btn-outline-dark w-100 mb-2" onClick={handleLogout}>
            Logout
          </button>

          <button type="button" className="btn btn-outline-secondary w-100" onClick={handleClearStorage}>
             Clear Local Storage
          </button>
        </form>

        {/* Info Section */}
        <div className="mt-4 text-center small text-muted border-top pt-3">
          <p> Created: {user.createdAt || "Not recorded"}</p>
          <p>Updated: {user.updatedAt || "Never"}</p>
          <p> Login Count: {loginCount}</p>
          <p> Theme Preference: {theme === "dark" ? "Dark" : "Light"}</p>
        </div>

        <div className="text-center mt-3">
          <button className="btn btn-outline-info" onClick={() => navigate("/")}>
             Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
