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
      .catch(() => {});
  };

  return (
    <section className="bg-[#F8F8F8]">
      <div className=" flex min-h-[calc(100vh-197px)] items-center justify-center  ">
        <div className="card rounded-sm bg-base-100 w-full max-w-sm shrink-0 shadow-sm">
          <form onSubmit={handelSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input rounded-sm input-bordered"
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
                className="input rounded-sm input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FFA619] text-white btn-primary border-none rounded-sm">
                Update Info
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileUpdate;
