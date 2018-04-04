const React = require('react');
const { Component } = require('react');

const { StyleSheet, ScrollView, View, Button, Platform } = require('react-native');

const { Navigation } = require('react-native-navigation');
const testIDs = require('../testIDs');

const FAB = 'fab';

class ScrollViewScreen extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Collapse',
          color: 'black',
          fontSize: 16
        },
        drawBehind: true,
        visible: true,
        testID: testIDs.TOP_BAR_ELEMENT
      },
      topTabs: {
        hideOnScroll: false
      },
      fab: {
        id: FAB,
        backgroundColor: 'blue',
        clickColor: 'blue',
        rippleColor: 'aquamarine',
        hideOnScroll: true
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      topBarHideOnScroll: false,
      topTabsHideOnScroll: false
    };
    this.onClickToggleTopBarHideOnScroll = this.onClickToggleTopBarHideOnScroll.bind(this);
    this.onClickToggleTopTabsHideOnScroll = this.onClickToggleTopTabsHideOnScroll.bind(this);
  }

  render() {
    return (
      <View>
        <ScrollView testID={testIDs.SCROLLVIEW_ELEMENT} contentContainerStyle={styles.contentContainer}>
          <View>
            <Button title='Toggle Top Bar Hide On Scroll' testID={testIDs.TOGGLE_TOP_BAR_HIDE_ON_SCROLL} onPress={this.onClickToggleTopBarHideOnScroll} />
            <Button title='Toggle TopTabs Hide On Scroll' testID={testIDs.TOGGLE_TOP_BAR_HIDE_ON_SCROLL} onPress={this.onClickToggleTopTabsHideOnScroll} />
          </View>
        </ScrollView>
      </View>
    );
  }

  onClickToggleTopBarHideOnScroll() {
    this.setState({
      topBarHideOnScroll: !this.state.topBarHideOnScroll
    });
  }

  onClickToggleTopTabsHideOnScroll() {
    this.setState({
      topTabsHideOnScroll: !this.state.topTabsHideOnScroll
    });
  }

  componentDidUpdate() {
    console.log('NIGA', `topbar = ${this.state.topBarHideOnScroll} toptabs = ${this.state.topTabsHideOnScroll}`);
    Navigation.setOptions(this.props.componentId, {
      topBar: {
        hideOnScroll: this.state.topBarHideOnScroll
      },
      topTabs: {
        hideOnScroll: this.state.topTabsHideOnScroll
      },
      fab: {
        hideOnScroll: !this.state.topBarHideOnScroll
      }
    });
  }
}

module.exports = ScrollViewScreen;

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    backgroundColor: 'green',
    paddingTop: 200,
    height: 1200
  }
});
