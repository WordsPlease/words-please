import React from 'react';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import fetchSetting from '../util/setting_api_util';
import Header from './Header';

const mapDispatchToProps = () => ({
  fetchSetting: fetchSetting
})

const mapStateToProps = state => ({
  setting: state.setting,
});

export default connect(
  mapStateToProps,mapDispatchToProps)
  (Header);