import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <>
      <main className="form-signin w-100 m-auto d-flex justify-content-center align-items-center py-5 text-center">
        <form>
          <Image src="next.svg" width={72} height={57} alt="logo" />
          <h1 className="h3 mb-3 my-4 fw-normal">Please sign in</h1>
          <div className="form-floating" bis_skin_checked={1}>
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              fdprocessedid="jgp14n"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating my-4" bis_skin_checked={1}>
            <input
              type="phone"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              fdprocessedid="m5v8mr"
            />
            <label htmlFor="floatingPassword">Contact Number</label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            fdprocessedid="p0dqw"
          >
            Contact us
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
      </main>
    </>
  );
};

export default Contact;
