import React, { Component } from 'react';
import {
  Table,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRowColumn,
  TextField,
  Dialog,
  FloatingActionButton,
  FlatButton,
} from 'material-ui';
import {
  ContentAdd,
} from 'material-ui/svg-icons';

const style = {
  margin: 10,
  float: 'right',
};

class ProductType extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      dialogOpen: false,
      types: [
        { id: 'motherboard', name: 'Motherboard', description: 'all motherboards' },
        { id: 'cpu', name: 'Processor', description: 'all CPUs' },
        { id: 'gpu', name: 'Graphic Cards', description: 'all GPUs' },
      ],
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.validateProductName = this.validateProductName.bind(this);
  }

  handleOpen() {
    this.setState({ dialogOpen: true });
  }

  handleClose() {
    this.setState({ dialogOpen: false });
  }

  validateProductName() {

  }

  render() {
    const dialogActions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary
        onTouchTap={this.handleClose}
      />,
    ];

    const productList = this.state.types.map((type) => {
      return (
        <TableRow key={type.id}>
          <TableRowColumn>{type.name}</TableRowColumn>
          <TableRowColumn>{type.description}</TableRowColumn>
        </TableRow>
      );
    });

    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.types.map((type) => (
              <TableRow key={type.id}>
                <TableRowColumn>{type.name}</TableRowColumn>
                <TableRowColumn>{type.description}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <FloatingActionButton secondary style={style} onTouchTap={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="Product Type"
          actions={dialogActions}
          open={this.state.dialogOpen}
          onRequestClose={this.handleClose}
        >

          <TextField
            id="product-type-name"
            floatingLabelText="Product type name"
            errorText={this.validateProductName}
            fullWidth
          />
          <TextField
            floatingLabelText="Product type description"
            fullWidth
            multiLine
            rows={1}
            rowsMax={5}
          />
        </Dialog>
      </div>
    );
  }
}

export default ProductType;
