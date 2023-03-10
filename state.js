class ConnectionState {
  read = () => {
    throw new Error("Not Open");
  };

  write = () => {
    throw new Error("Not Open");
  };

  open = () => {
    throw new Error("Already Open");
  };

  close = () => {
    throw new Error("Already Closed");
  };
}

class ClosedConnectionState extends ConnectionState {
  open = (_this) => {
    console.log('open')
    _this.state = new OpenConnectionState();
  };
}

class OpenConnectionState extends ConnectionState {
  read = () => {
    console.log("reading");
  };

  write = (content) => {
    console.log("writing:", content);
  };

  close = (_this) => {
    console.log('close')
    _this.state = new ClosedConnectionState();
  };
}

class Connection {
  state;

  constructor() {
    this.init();
  }

  init = () => {
    this.makeNewState(new ClosedConnectionState());
  };

  makeNewState = (state) => {
    this.state = state;
  };

  read = () => {
    return this.state.read(this);
  };

  write = (content) => {
    return this.state.write(content);
  };

  open = () => {
    return this.state.open(this);
  };

  close = () => {
    return this.state.close(this);
  };
}

let connection1 = new Connection()
connection1.open()
connection1.read()
connection1.write()

connection1.close()

// connection1.open()
connection1.read()
connection1.write()
