import React from 'react';

const NewPlaylist = (props) => {
  console.log("In NewPlaylist, props: ", props);
  console.log(`handleChange=${props.handleChange} createPlaylist=${props.createPlaylist}`);
  const inputValue = props.inputValue;
  const maxNameLength = 16;
  let doDisable = false;
  let showWarning = false;


  if (inputValue.length > maxNameLength || inputValue.length <= 0) doDisable = true;
  if (doDisable && !props.pristine) showWarning = true;
  return (
    <div className="well">
      {showWarning && <div className="alert alert-warning">Name must be 1-16 characters</div>}
      <form className="form-horizontal" onSubmit={props.createPlaylist}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" value={props.inputValue} type="text" onChange={props.handleChange}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" disabled={doDisable}>Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    )
  }

export default NewPlaylist;
