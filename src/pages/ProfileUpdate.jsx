import { useContext } from "react";
import AuthContext from "../context/authContext";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
  const { updateUserProfile, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        setLoading(false);
        navigate("/my-Profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" flex min-h-[calc(100vh-197px)] items-center justify-center  ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handelSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo-URL</span>
            </label>
            <input
              type="text"
              placeholder="URL"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Info</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
