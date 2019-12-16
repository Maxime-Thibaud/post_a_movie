import React from 'react';


class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.postMovie = this.postMovie.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  
  postMovie() {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
    
    const url = "https://post-a-form.herokuapp.com/api/movies/";

    fetch(url, config)
    .then(res => res.json())
      .then(res => {
       if (res.error) {
        alert(res.error);
      } else {
        alert(`Film ajouté dans l'API !`);
      }
    }).catch(e => {
      console.error(e);
      alert("Erreur lors de l'ajout d'un film");
    });
  }
  
  submitForm(e) {
    e.preventDefault();
  }

  
  render() {
    return (
    <div className="FormMovie">
      <h1>Saisi d'un film</h1>
      <form onSubmit={this.submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className="form-data">
            <label htmlFor="title">Film</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="poster">Affiche</label>
            <input
              type="text"
              id="poster"
              name="poster"
              onChange={this.onChange}
              value={this.state.poster}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="comment">Commentaire</label>
            <textarea
              type="text"
              id="comment"
              name="comment"
              onChange={this.onChange}
              value={this.state.comment}
              required
            />
          </div>
          <hr />
          <div className="form-data">
            <input type="submit" value="Envoyer" onClick={this.postMovie} />
          </div>
        </fieldset>
      </form>
    </div>
    )
    
  }
}

export default FormMovie
