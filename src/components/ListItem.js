import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation,
    UIManager
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'

class ListItem extends Component {
    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if(expanded) {
            return(
                <CardSection>
                    <Text style={{padding: 15, fontSize: 16}}>
                    {library.item.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { id, title } = this.props.library.item;
        const { titleStyle } = styles;

        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
}

const mapStateToLogic = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;

    return { expanded };
}

// dispatches actions/index.js (action creators) into Redux store
export default connect(mapStateToLogic, actions)(ListItem);