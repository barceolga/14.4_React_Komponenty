
var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

render: function() {
    return React.createElement('li', {key: this.props.movie.id},
            React.createElement(MovieTitle, {title: this.props.movie.title}),
            React.createElement(MovieDescription, {desc: this.props.movie.desc}),
            React.createElement(MovieImage, {src: this.props.movie.src})
      )
    }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
    },

render: function() {
     return React.createElement('h2', {className: 'movieTitle'}, this.props.title)
   }

});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
    },

render: function() {
    console.log(this.props)
  return React.createElement('p',  {className: 'movieDescription'}, this.props.desc)
    }
});

var MovieImage = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired
  },

render: function() {
    return React.createElement('img', {className: 'movieImage', src: this.props.src})
  }
});

var MoviesList = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired
  },

  render: function() {
      var moviesElements = this.props.list.map(function(movie) {
        return React.createElement(Movie, {key: movie.id, movie: movie});
      });
      return (
        React.createElement('ul', {className: 'moviesList'}, moviesElements)
      )
  }
});

var movies = [
  {
    id: 1,
    title: 'Good Will Hunting',
    desc: 'A movie about a kid with an IQ of the charts and a lot of emotional/social issues.',
    src: './public/GoodWillHunting.jpeg'
  },
  {
    id: 2,
    title: 'IceAge',
    desc: 'A very funny movie about the adventures of pack of prehistorical animals.',
    src: './public/IceAge.jpg'
  },
  {
    id: 3,
    title: 'The Mission',
    desc: 'A dramatic history of a catholic mission in Brazil in 17th century.',
    src: './public/TheMission.jpg'
  },
  {
    id: 4,
    title: 'Glory Road',
    desc: 'Based on true story this film tells the story of the first time when the mainly Afroamerican basketball team won NCAA championship.',
    src: './public/GloryRoad.jpg'
  },
  {
    id: 5,
    title: 'A good year',
    desc: 'A funny, wise and trully moving story of London banker who inherits his uncle\'s vineyard in Provence.',
    src: './public/GoodYear.jpeg'
  }
];

var element =
React.createElement('div',  {},
 React.createElement('h1', {}, 'My favourite movies list'),
 React.createElement(MoviesList, {list: movies})
);

ReactDOM.render(element, document.getElementById('app'));
