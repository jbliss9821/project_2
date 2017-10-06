function Event(data) {
  this.name = data.Name;
  this.color = data.Color;
  this.date = data.Date;
  this.blocks = data.Blocks;
  this.people = data.People;
  this.id = data.Id;
  this.tasks = data.Tasks;
}

// class methods
Event.prototype.print = function() {
   console.log(this)
};

// export the class
module.exports = Event;