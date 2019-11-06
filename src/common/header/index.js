import React, { Component, Fragment } from 'react';
import {
    HeaderWrapper, Nav, Logo, NavItem, NavSearch, Addition, Diamond, SearchWrapper
} from './style'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreator from '../../store/header/actionCreator';
import { CSSTransition } from 'react-transition-group';
class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.focused)
        return (
            <Fragment>
                <HeaderWrapper>
                    <Nav >
                        <Logo />
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        <Addition className="wirte">
                            <span className="iconfont">&#xe615;</span>
                            写作
                            </Addition>
                        <Addition className='reg'>注册</Addition>
                        <NavItem className='right  '>登录</NavItem>
                        <Diamond></Diamond>
                        <NavItem className='right'>
                            <span className="iconfont">&#xe636;</span>
                        </NavItem>

                        <SearchWrapper>
                            <CSSTransition
                                in={this.props.focused}
                                timeout={200}
                                classNames='slide'
                            >
                                <NavSearch
                                    onFocus={this.props.focuse}
                                    onBlur={this.props.blur}
                                    className={this.props.focused ? 'focused' : ''}
                                ></NavSearch>
                            </CSSTransition>
                            <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}> &#xe62d;</span>

                        </SearchWrapper>

                    </Nav>
                </HeaderWrapper>
            </Fragment >
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreator, dispatch)


}
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)