import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  FlatButton,
  FloatingActionButton,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TextField,
} from 'material-ui';
import {
  ContentAdd,
} from 'material-ui/svg-icons';

const style = {
  bottom: 20,
  right: 20,
  position: 'fixed',
};

class ProductList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      dialogOpen: false,
      productType: props.productType,
      productList: [
        {
          id: '1',
          producer: 'Intel',
          name: 'i5-6600',
          noCores: 4,
          noThreads: 4,
          baseFrequency: 3.5,
          turboFrequency: 3.9,
        },
      ],
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ dialogOpen: true });
  }

  handleClose() {
    this.setState({ dialogOpen: false });
  }

  render() {
    const productTable = this.state.productList.map(product =>
      (
        <TableRow key={product.id}>
          <TableRowColumn>{product.producer}</TableRowColumn>
          <TableRowColumn>{product.name}</TableRowColumn>
          <TableRowColumn>{product.noCores}</TableRowColumn>
          <TableRowColumn>{product.noThreads}</TableRowColumn>
          <TableRowColumn>{product.baseFrequency}</TableRowColumn>
          <TableRowColumn>{product.turboFrequency}</TableRowColumn>
        </TableRow>
      ),
    );

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

    return (
      <div>
        <h3>ID: {this.state.productType}</h3>
        <Table>
          <TableHeader
            adjustForCheckbox={false}
            displaySelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn>Producer</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn># of Cores</TableHeaderColumn>
              <TableHeaderColumn># of Threads</TableHeaderColumn>
              <TableHeaderColumn>Base Frequency</TableHeaderColumn>
              <TableHeaderColumn>Turbo Frequency</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            {productTable}
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
            floatingLabelText="Product name"
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

ProductList.propTypes = {
  productType: PropTypes.string.isRequired,
};

export default ProductList;
