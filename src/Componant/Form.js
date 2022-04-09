import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css'
export default function Form(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (submission) => console.log(submission);

  const onSubmit = (data) => {
    debugger;
    JSON.stringify(data);
    console.log(data);
    alert(JSON.stringify(data));
   
  };
  return (
    <div>
      <body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            <div>
              <h1 className='heading'>Submit Comment</h1>
              <div>
                <label>Rating</label>
              </div>
              <input
                type="number"
                {...register('Rating', { required: true })}
                placeholder="Enter only 1 to 5 Rating"
              /> 
              {errors.Rating && <p class="color"> *it's required field"</p>}
              
            </div>
            <div>
              <div>
                <label>Name</label>
              </div>
              <input
                type="text"
                {...register('name', { required: true })} />
              {errors.name && <p class="color1"> *it's required field."</p>}
            </div>
            <div>
              <div>
                <label>Comment</label>
              </div>
              <textarea  rows='4' cols='20'
                {...register('Comment', { required: true })}/>
              {errors.Comment && <p class="color2"> *comment is required. "</p>}
            </div>

            <button type="submit" class="btn">Submit</button>
          </div>
        </form>
      </body>
    </div>
  );
}
