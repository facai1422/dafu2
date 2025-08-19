var _tips = 0,
	_521tips = 0;
var number_CH = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
var _521msg = ["服务器做梦去了~~~", "抱歉，服务器开小差了!", "我也有心情不好的时候", "偶尔皮一下~很开森", "Oh……前方熊出没", "持续为您服务，好辛苦", "奴家累了，想小憨一会！",
	"休息，休息一会儿！"
];
var _521button = ["捶它千百遍", "粉笔丢它", "么么哒", "粉拳捶它", "快找光头强", "赐你神力", "撩醒她", "别~"];
$.ajaxSetup({
	contentType: "application/x-www-form-urlencoded;charset=utf-8",
	cache: true,
	complete: function (a, b) {
		if (a.status == 911 || a.status == 999) {
			if (_tips == 0) {
				if (a.status == 911) {
					_confirm("error", 0, "", "该账号在异地登录，您已被迫下线", redirectLogin, redirectLogin)
				} else {
					if (a.status == 999) {
						_confirm("error", 0, "", "登录超时，请重新登录", redirectLogin, redirectLogin)
					}
				}
				clearOtherInterval();
				_tips++;
				return
			}
		} else {
			if (a.status == 521) {
				if (_521tips == 0) {
					_confirm("warning", 0, "", "努力加载中，请刷新", _redirectCurrentPage, _redirectCurrentPage, "", 4, "刷新");
					_521tips++
				}
			}
		}
	}
});

function _readFile(g) {
	if (typeof window.ActiveXObject != "undefined") {
		var b = input.value;
		var c = "";
		try {
			var d = new ActiveXObject("Scripting.FileSystemObject");
			if (/text+/.test(b.type)) {
				var a = d.openTextFile(b, 1);
				c = a.readAll();
				a.close();
				$("#textareaId").val(this.result)
			} else {
				_tips_alert("", 3, "导入功能暂只支持.txt格式的文件", "", "", 3000)
			}
		} catch (f) {}
	} else {
		if (g.files) {
			var b = g.files[0];
			var a = new FileReader();
			if (/text+/.test(b.type)) {
				a.onload = function () {
					$("#textareaId").val(this.result)
				};
				a.readAsText(b, "utf-8")
			} else {
				_tips_alert("", 3, "导入功能暂只支持.txt格式的文件", "", "", 3000)
			}
		}
	}
	$(g).val("")
}

function convertImgToBase64(d, f, e) {
	var c = document.createElement("CANVAS"),
		a = c.getContext("2d"),
		b = new Image;
	b.crossOrigin = "Anonymous";
	b.onload = function () {
		c.height = b.height;
		c.width = b.width;
		a.drawImage(b, 0, 0);
		var g = c.toDataURL(e || "image/png");
		f.call(this, g);
		c = null
	};
	b.src = d
}

function _rnd(d, a, b) {
	var c = Math.floor(Math.random() * (a - d + 1) + d);
	return b ? c * 1000 : c
}

function clearOtherInterval() {
	_glob_money_time = window.clearInterval(_glob_money_time);
	_glob_message_time = window.clearInterval(_glob_message_time);
	_glob_message_time = null;
	_glob_money_time = null;
	delCookie("newsDiv");
	delCookie("_term_cookie")
}

function addParam(a) {
	a.ProjectPublic_PlatformCode = 3;
	a.PlType = 3;
	return a
}

function json2str(d) {
	var a = [];
	var b = function (e) {
		if (typeof e == "object" && e != null) {
			return json2str(e)
		}
		return /^(string)$/.test(typeof e) ? "'" + e + "'" : e
	};
	if (d instanceof Array) {
		for (var c = 0; c < d.length; c++) {
			a.push(b(d[c]))
		}
		return "[" + a.join(",") + "]"
	} else {
		for (var c in d) {
			a.push("'" + c + "':" + b(d[c]))
		}
		return "{" + a.join(",") + "}"
	}
}

function zhuanhuan(a) {
	if ("" == a || typeof a == "undefined") {
		return "--"
	}
	if (isNaN(a)) {
		return "--"
	}
	if (a == 0) {
		return 0
	}
}

function mySelectTime(d, a, e, c) {
	if (d != "teamBet") {
		if (!d) {
			d = 3
		}
		d = Number(d)
	}
	if (!a) {
		a = "selectTime"
	}
	if (!e) {
		e = "starttime"
	}
	if (!c) {
		c = "endtime"
	}
	$("#" + e).unbind("click");
	$("#" + c).unbind("click");
	a = "#" + a;
	var b = $(a).val();
	if ("1" == b) {
		$("#" + e).val(getDate());
		$("#" + c).val(getDate());
		if (d != "teamBet") {
			if (d != 0) {
				d = d + 1
			}
			$("#" + e).click(function () {
				WdatePicker({
					dateFmt: "yyyy-MM-dd",
					readOnly: true,
					isShowClear: false,
					minDate: "%y-%M-{%d-" + d + "}",
					maxDate: "#F{$dp.$D('" + c + "')}"
				})
			});
			$("#" + c).click(function () {
				WdatePicker({
					dateFmt: "yyyy-MM-dd",
					readOnly: true,
					isShowClear: false,
					minDate: "#F{$dp.$D('" + e + "')}",
					maxDate: "%y-%M-%d"
				})
			})
		} else {
			$("#" + e).click(function () {
				WdatePicker({
					dateFmt: "yyyy-MM-dd",
					readOnly: true,
					isShowClear: false,
					minDate: "%y-{%M-3}-{%d+1}",
					maxDate: "#F{$dp.$D('" + c + "')}"
				})
			});
			$("#" + c).click(function () {
				WdatePicker({
					dateFmt: "yyyy-MM-dd",
					readOnly: true,
					isShowClear: false,
					minDate: "#F{$dp.$D('" + e + "')}",
					maxDate: "%y-%M-%d"
				})
			})
		}
	} else {
		$("#" + e).val(getDate("-" + (d + 1)));
		$("#" + c).val(getDate("-" + (d + 1)));
		$("#" + e).click(function () {
			if (d == 3) {
				WdatePicker({
					dateFmt: "yyyy-MM-dd",
					readOnly: true,
					isShowClear: false,
					minDate: "%y-%M-{%d-33}",
					maxDate: "#F{$dp.$D('" + c + "')}"
				})
			} else {
				if (d == 0) {
					WdatePicker({
						dateFmt: "yyyy-MM-dd",
						readOnly: true,
						isShowClear: false,
						minDate: "%y-{%M-3}-{%d+1}",
						maxDate: "#F{$dp.$D('" + c + "')}"
					})
				} else {
					if (d == 7) {
						WdatePicker({
							dateFmt: "yyyy-MM-dd",
							readOnly: true,
							isShowClear: false,
							minDate: "%y-%M-{%d-32}",
							maxDate: "#F{$dp.$D('" + c + "')}"
						})
					} else {}
				}
			}
		});
		$("#" + c).click(function () {
			var f = $("#" + e).val();
			WdatePicker({
				dateFmt: "yyyy-MM-dd",
				readOnly: true,
				isShowClear: false,
				minDate: f,
				maxDate: "%y-%M-{%d-" + (d + 1) + "}"
			})
		})
	}
}

function getDate(e) {
	if (!e) {
		e = 0
	}
	var b = 1000 * 60 * 60 * 24;
	var c = +new Date();
	var h = c = c + e * b;
	h = new Date(h);
	var f = h.getFullYear();
	var g = (h.getMonth() + 1) < 10 ? ("0" + (h.getMonth() + 1)) : (h.getMonth() + 1);
	var a = h.getDate() < 10 ? ("0" + h.getDate()) : h.getDate();
	return f + "-" + g + "-" + a
}

function getCuttentDay(b, a) {
	if (!b) {
		b = "starttime"
	}
	if (!a) {
		a = "endtime"
	}
	$("#" + b).val(getDate());
	$("#" + a).val(getDate())
}

function rechargeTypeById(b) {
	var a = "";
	if (b == 0) {
		a = "网银转账"
	} else {
		if (b == 1) {
			a = "在线支付"
		} else {
			if (b == 2) {
				a = "其他"
			} else {
				if (b == 3) {
					a = "人工存款"
				} else {
					if (b == 4) {
						a = "活动"
					} else {
						if (b == 5) {
							a = "易宝支付"
						} else {
							if (b == 6) {
								a = "MY18工行"
							} else {
								if (b == 8) {
									a = "汇潮支付"
								} else {
									if (b == 9) {
										a = "环讯支付"
									} else {
										if (b == 10) {
											a = "MY18支付宝 "
										} else {
											if (b == 11) {
												a = "MY18建设"
											} else {
												if (b == 12) {
													a = "招行汇款"
												} else {
													if (b == 13) {
														a = "MY18财付通"
													} else {
														if (b == 14) {
															a = "宝付支付"
														} else {
															if (b == 15) {
																a = "国付宝支付 "
															} else {
																if (b == 16) {
																	a = "卡卡联支付"
																} else {
																	if (b == 17) {
																		a = "MY18民生银行"
																	} else {
																		if (b == 18) {
																			a = "乐付宝支付"
																		} else {
																			if (b == 19) {
																				a = "通汇支付"
																			} else {
																				if (b == 20) {
																					a = "中联信通支付  "
																				} else {
																					if (b == 21) {
																						a = "OPEN2PAY"
																					} else {
																						if (b == 22) {
																							a = "新贝支付"
																						} else {
																							if (b == 23) {
																								a = "新汇潮支付"
																							} else {
																								if (b == 24) {
																									a = "快捷通支付"
																								} else {
																									if (b == 25) {
																										a = "智付支付"
																									} else {
																										if (b == 26) {
																											a = "国付宝手机支付"
																										} else {
																											if (b == 32) {
																												a = "新生支付"
																											} else {
																												if (b == 33) {
																													a = "新生微信支付"
																												} else {
																													if (b == 34) {
																														a = "汇付宝支付"
																													} else {
																														if (b == 35) {
																															a = "汇付宝微信支付"
																														} else {
																															if (b == 36) {
																																a = "通汇微信支付"
																															} else {
																																if (b == 37) {
																																	a = "Rfu支付"
																																} else {
																																	if (b == 38) {
																																		a = "Rfu微信支付"
																																	} else {
																																		if (b == 157) {
																																			a = "MY18支付宝2"
																																		} else {
																																			if (b == 39) {
																																				a = "智付微信支付"
																																			} else {
																																				if (b == 40) {
																																					a = "首信易支付"
																																				} else {
																																					if (b == 41) {
																																						a = "首信易微信支付"
																																					} else {
																																						if (b == 42) {
																																							a = "乐付微信支付"
																																						} else {
																																							if (b == 43) {
																																								a = "乐付支付"
																																							} else {
																																								if (b == 44) {
																																									a = "乐付快捷支付"
																																								} else {
																																									if (b == 45) {
																																										a = "乐付支付宝"
																																									} else {
																																										if (b == 47) {
																																											a = "汇博QQPay"
																																										} else {
																																											if (b == 50) {
																																												a = "汇博支付"
																																											} else {
																																												if (b == 51) {
																																													a = "华仁支付"
																																												} else {
																																													if (b == 52) {
																																														a = "华仁支付(快捷支付)"
																																													} else {
																																														if (b == 48) {
																																															a = "华仁支付(微信支付)"
																																														} else {
																																															a = "其他"
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return a
}

function rechargeState(a) {
	if (a == "0") {
		return "<span style='color:#FF0000'>未处理</span>"
	}
	if (a == "1") {
		return "<span style='color:#00CC33'>交易成功</span>"
	}
	if (a == "2") {
		return "<span style='color:#FF0000'>交易失败</span>"
	}
}

function tkfs(b) {
	var a = "";
	if (b == 0) {
		a = ""
	}
	if (b == 1) {
		a = "提款"
	}
	if (b == 2) {
		a = "人工提款"
	}
	return a
}

function tkzt(a) {
	if (a == "0") {
		return "<span style='color:#FF0000 '>未处理</span>"
	}
	if (a == "1") {
		return "<span style='color:#FF0000 '>交易中</span>"
	}
	if (a == "2") {
		return "<span style='color:#FF0000 '>拒绝</span>"
	}
	if (a == "3") {
		return "<span style='color:#00CC33'>交易成功</span>"
	}
	if (a == "4") {
		return "<span style='color:#FF0000'>交易失败</span>"
	}
}

function bankMate(a) {
	if (a == "1") {
		return "请选择存款银行"
	}
	if (a == "bob") {
		return "北京银行"
	}
	if (a == "cbhb") {
		return "渤海银行"
	}
	if (a == "bod") {
		return "东莞银行"
	}
	if (a == "icbc") {
		return "中国工商银行"
	}
	if (a == "ceb") {
		return "中国光大银行"
	}
	if (a == "gdb") {
		return "广发银行"
	}
	if (a == "gzb") {
		return "广州银行"
	}
	if (a == "gzb") {
		return "华夏银行"
	}
	if (a == "hzb") {
		return "杭州银行"
	}
	if (a == "hxb") {
		return "华夏银行"
	}
	if (a == "ccb") {
		return "中国建设银行"
	}
	if (a == "comm") {
		return "交通银行"
	}
	if (a == "cmbc") {
		return "民生银行"
	}
	if (a == "spdb") {
		return "上海浦东发展银行"
	}
	if (a == "bos") {
		return "上海银行"
	}
	if (a == "sdb" || a == "cpb") {
		return "平安银行"
	}
	if (a == "cib") {
		return "兴业银行"
	}
	if (a == "psbc") {
		return "邮政银行"
	}
	if (a == "cmb") {
		return "招商银行"
	}
	if (a == "czb") {
		return "浙商银行"
	}
	if (a == "boc") {
		return "中国银行"
	}
	if (a == "ecitic" || a == "citic") {
		return "中信银行"
	}
	if (a == "abc") {
		return "中国农业银行"
	}
	if (a == "alipay") {
		return "支付宝"
	}
	if (a == "tenpay") {
		return "财付通"
	}
	if (a == "nbcb") {
		return "宁波银行"
	}
	if (a == "njcb") {
		return "南京银行"
	}
	if (a == "tccb") {
		return "天津银行"
	}
	return a
}

function payInType(a) {
	if (a == 151) {
		return "工商银行"
	} else {
		if (a == 152) {
			return "招商银行"
		} else {
			if (a == 153) {
				return "建设银行"
			} else {
				if (a == 154) {
					return "支付宝"
				} else {
					if (a == 155) {
						return "财付通"
					} else {
						if (a == 156) {
							return "民生银行"
						} else {
							if (a == 22) {
								return "在线支付"
							} else {
								if (a == 23) {
									return "乐付宝支付"
								} else {
									if (a == 24) {
										return "通汇支付"
									} else {
										if (a == 25) {
											return "中信联通"
										} else {
											if (a == 17) {
												return "汇潮"
											} else {
												if (a == 19) {
													return "环讯"
												} else {
													if (a == 26) {
														return "中信联通"
													} else {
														return a
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

function sourceType(b, a) {
	if (b == 1) {
		return "投注"
	} else {
		if (b == 10 || b == 11 || b == 12 || b == 13) {
			return "撤单"
		} else {
			if (b == 17) {
				return "活动"
			} else {
				if (b == 20) {
					return "出票"
				} else {
					if (b == 30) {
						return "自身投注返点"
					} else {
						if (b == 40) {
							return "下级返点"
						} else {
							if (b == 50) {
								return "中奖"
							} else {
								if (b == 60) {
									return "撤奖"
								} else {
									if (b == 70) {
										return "提款"
									} else {
										if (b == 80) {
											return "申请提款失败"
										} else {
											if (b == 90) {
												return "提款"
											} else {
												if (b == 100) {
													return "提款审批同意--后台人工出款"
												} else {
													if (b == 110) {
														return "提款审批同意--自动出款"
													} else {
														if (b == 120) {
															return tkfs(a)
														} else {
															if (b == 121) {
																return "提款成功--刷新"
															} else {
																if (b == 122) {
																	return "人工提款"
																} else {
																	if (b == 130) {
																		return "提款失败"
																	} else {
																		if (b == 131) {
																			return "提款成功--刷新"
																		} else {
																			if (b == 151) {
																				return "其他加款"
																			} else {
																				if (b == 152) {
																					return "人工存款"
																				} else {
																					if (b == 153) {
																						return "活动加款"
																					} else {
																						if (b == 160) {
																							return "充值失败"
																						} else {
																							if (b == 170 || b == 180) {
																								return "转账"
																							} else {
																								if (b == 190) {
																									return "给下级充值"
																								} else {
																									if (b == 200) {
																										return "来自上级的充值"
																									} else {
																										if (b == 210) {
																											return "分红"
																										} else {
																											if (b == 220 || b == 230 || b == 231 || b == 240 || b == 241 || b == 250 || b == 251 || b ==
																												252 || b == 253 || b == 254 || b == 255 || b == 256 || b == 257) {
																												return "系统活动"
																											} else {
																												if (b == 261) {
																													return "按比例发放日结 "
																												} else {
																													if (b == 262) {
																														return "按阶梯发放日结"
																													} else {
																														if (b == 263) {
																															return "来自上级的日结"
																														} else {
																															if (b == 264) {
																																return "发给下级的日结"
																															} else {
																																if (b == 265) {
																																	return "人工添加日结"
																																} else {
																																	if (b == 266) {
																																		return "人工扣除日结"
																																	} else {
																																		if (b == 267 || b == 268 || b == 269) {
																																			return "分红"
																																		} else {
																																			if (b == 301 || b == 302) {
																																				return "日结"
																																			} else {
																																				if (b == 290 || b == 300 || b == 310 || b == 390 || b == 400 || b == 410 || b ==
																																					490 || b == 500 || b == 510 || b == 590 || b == 600 || b == 610) {
																																					return "转账"
																																				} else {
																																					if (b == 303) {
																																						return "其他扣款"
																																					} else {
																																						if (b == 304) {
																																							return "活动扣款"
																																						} else {
																																							if (b == 411) {
																																								return "新日结"
																																							} else {
																																								if (b == 412) {
																																									return "红包雨"
																																								} else {
																																									if (b == 422) {
																																										return "充值手续费"
																																									} else {
																																										if (b == 423) {
																																											return "提款手续费"
																																										} else {
																																											if (b == 424) {
																																												return "提款手续费"
																																											} else {
																																												return b
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

function getMarks(a, b) {
	if (a == 1) {
		return "购买" + Lottery.getName(b)
	} else {
		if (a == 10) {
			return "用户撤单"
		} else {
			if (a == 11) {
				return "管理员撤单"
			} else {
				if (a == 12) {
					return "追号中奖撤单"
				} else {
					if (a == 13) {
						return "系统撤单"
					} else {
						if (a == 20) {
							return Lottery.getName(b) + "出票"
						} else {
							if (a == 30) {
								return "自身投注返点"
							} else {
								if (a == 40) {
									return b + "向上级返点"
								} else {
									if (a == 50) {
										return "系统派奖"
									} else {
										if (a == 60) {
											return "管理员撤奖"
										} else {
											if (a == 70) {
												return "申请提款，扣除余额"
											} else {
												if (a == 100 || a == 110 || a == 120) {
													return "用户提款"
												} else {
													if (a == 140) {
														return "申请充值"
													} else {
														if (a == 150) {
															return "用户充值"
														} else {
															if (a == 170) {
																return "钱包中心转入彩票"
															} else {
																if (a == 180) {
																	return "彩票转入钱包中心"
																} else {
																	if (a == 190) {
																		return "给" + b
																	} else {
																		if (a == 200) {
																			if (b.indexOf("[") == -1) {
																				return "来自上级" + b
																			} else {
																				b = b.substr((b.indexOf("]") + 1), (b.length - 1));
																				return "来自上级的" + b
																			}
																		} else {
																			if (a == 210) {
																				return "系统分红"
																			} else {
																				if (a == 220) {
																					return "开户送礼" + b
																				} else {
																					if (a == 230) {
																						return "充值送礼"
																					} else {
																						if (a == 231) {
																							return b + "的充值佣金"
																						} else {
																							if (a == 240) {
																								return "投注送礼"
																							} else {
																								if (a == 241) {
																									return b + "的投注佣金"
																								} else {
																									if (a == 251) {
																										return "满就送"
																									} else {
																										if (a == 252) {
																											return "亏损补贴"
																										} else {
																											if (a == 253) {
																												return b + "的亏损佣金"
																											} else {
																												if (a == 254) {
																													return b + "的满就送佣金"
																												} else {
																													if (a == 255) {
																														return "消费拿红包"
																													} else {
																														if (a == 256) {
																															return "土豪签到"
																														} else {
																															if (a == 257) {
																																return "转盘活动"
																															} else {
																																if (a == 261) {
																																	return "按比例发放日工资"
																																} else {
																																	if (a == 301) {
																																		return "消费日工资"
																																	} else {
																																		if (a == 302) {
																																			return "亏损日工资"
																																		} else {
																																			if (a == 422) {
																																				return "充值手续费"
																																			} else {
																																				if (a == 423) {
																																					return "提款手续费"
																																				} else {
																																					if (a == 424) {
																																						return "提款拒绝，返还手续费"
																																					} else {
																																						return b
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

function orderState(a) {
	if (a <= 0) {
		return "完成"
	} else {
		return "进行中"
	}
}

function betOrderState(a) {
	if ((a & 1) == 1) {
		return "购买成功"
	}
	if ((a & 64) == 64) {
		return "已出票"
	}
	if ((a & 33554432) == 33554432) {
		return '<font color="#fa141b">未中奖</font>'
	}
	if ((a & 16777216) == 16777216) {
		return '<font color="#4dc72a">已派奖</font>'
	}
	if ((a & 4) == 4) {
		return "已撤单"
	}
	if ((a & 32768) == 32768) {
		return "已撤奖"
	}
}

function zhongjiangzhui(a) {
	if ((a & 2) == 2) {
		return "是"
	} else {
		if ((a & 4) == 4) {
			return "否"
		} else {
			return ""
		}
	}
}

function index_nav(a) {
	$(a).parent().parent().find("a").removeClass("active");
	$(a).addClass("active")
}
$.extend({
	head_nav: function (a) {
		$(".index_nav li").find("a").removeClass("active");
		$(".index_nav ").find("li:eq(" + a + ")").find("a").addClass("active")
	},
	nav_Active: function (c, b) {
		var d = "";
		var a = "";
		if (c == 0) {
			d = "我的账户"
		} else {
			if (c == 1) {
				d = "财务中心"
			} else {
				if (c == 2) {
					d = "彩票报表"
				} else {
					if (c == 3) {
						d = "棋牌报表"
					} else {
						if (c == 4) {
							d = "代理管理"
						} else {
							if (c == 5) {
								d = "契约管理"
							} else {
								if (c == 6) {
									d = "消息中心"
								} else {
									if (c == 7) {
										d = "真人报表"
									} else {
										if (c == 9) {
											d = "红包管理"
										}
									}
								}
							}
						}
					}
				}
			}
		}
		$("#myTab_ul").find("li").removeClass("active").end().find("a:contains('" + d + "')").parent().addClass("active");
		if (b != undefined) {
			if (b == 0) {
				a = "日结契约"
			} else {
				if (b == 1) {
					a = "日结记录"
				} else {
					if (b == 2) {
						a = "分红契约"
					} else {
						if (b == 3) {
							a = "分红记录"
						} else {
							if (b == 4) {
								a = "收件箱"
							} else {
								if (b == 5) {
									a = "发件箱"
								} else {
									if (b == 6) {
										a = "写邮件"
									} else {
										if (b == 7) {
											a = "亏损工资"
										} else {
											if (b == 8) {
												a = "制度报表"
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		if (c == 5 || c == 6) {} else {}
	},
});
$.extend({
	newPage: function (e, d, c, b, a) {
		if (!a) {
			a = 10
		}
		if (!d) {
			d = 0
		} else {
			d = d.length
		}
		if ((e == 0 && d == a) || e > 0) {
			loadNewPage(e, a, null, c)
		} else {
			if (d == 0) {
				$.pageEmpty(c, b)
			} else {
				$.newPageEmpty(c)
			}
		}
	},
	page: function (f, b, d, c, a, e) {
		if (b > 0) {
			if (!a) {
				loadPage(f, b, null, null, d, e)
			} else {
				loadPage(f, b, a, null, d, e)
			}
		} else {
			$.pageEmpty(d, c)
		}
	},
	newPageEmpty: function (a) {
		var b = "";
		if (a) {
			b = $("#" + a);
			b.next().find("p.pageRecord").empty();
			b.next().find("div.page").empty()
		} else {
			$(".pageRecord").empty();
			$(".page").empty()
		}
	},
	pageEmpty: function (b, a) {
		var c = "";
		if (b) {
			if ($("#" + b)[0].tagName == "TABLE") {
				c = $("#" + b)
			} else {
				c = $("#" + b).parent()
			}
		} else {
			c = $("table:eq(0)")
		}
		c.find("tr:gt(0)").empty();
		c.append("<tr><td align ='center' colspan='" + a + "'>无记录</td></tr>");
		if (b) {
			c.next().find("p.pageRecord").empty();
			c.next().find("div.page").empty()
		} else {
			$(".pageRecord").empty();
			$(".page").empty()
		}
	},
	popUp: function (c, b) {
		if ($(".loading_zz").length == 0) {
			$("<div>").addClass("loading_zz").appendTo("body");
			var a = $('<div id="pop"></div>').addClass("prompt_box").appendTo("body");
			a.append('<h4><a id="closePromp" class="promptbox_close">×</a><img src="' + ctx +
				'/resources/images/tanIcon_07.png" />提示</h4>');
			a.append(
				'<div class="box"><p class="popName"></p><p class="prompt_btn"><input type="button" id="alertButton" value="确定" /></p></div>'
			)
		}
		$("#alertButton,#closePromp").on("click", function () {
			if ($(".loading_zz").length > 0) {
				$(".loading_zz").hide();
				$(".prompt_box").hide()
			}
			if (typeof b == "string") {
				$("#" + b).focus()
			}
			if (typeof b == "function") {
				b.apply()
			}
		});
		$(".box").find("p:eq(0)").html(c);
		$(".loading_zz").show();
		$("#pop").show()
	},
	shadeUp: function () {
		if ($(".loading_zz").length == 0) {
			loading_zz = $("<div>").addClass("loading_zz").appendTo("body");
			loaddiv = $("<div>").addClass("loding").css({
				top: (loading_zz.height() - 32) / 2,
				left: (loading_zz.width() - 230) / 2,
				width: "230px",
				height: "32px",
				"z-index": 99,
				"line-height": "32px",
				position: "absolute",
				padding: "9px 15px",
				"text-align": "center",
				background: "#000",
				opacity: "0.4",
				filter: "alpha(opacity=40)"
			}).append($("<img>").width(32).height(32).attr("src", ctx + "/resources/images/loadding_new.gif").css({
				"vertical-align": "middle",
				"float": "left"
			})).append($("<div>").addClass("txt").html("正在处理中,请稍后……")).appendTo("body")
		}
		$(".loading_zz").show();
		$("#pop").show()
	},
	shadeDown: function () {
		if ($(".loading_zz").length != 0) {
			$(".loading_zz").hide();
			$(".loding").hide()
		}
	}
});

function agentTabs(b, a) {
	$.each($(b).siblings(), function (d, c) {
		$(c).removeClass("active")
	});
	$(b).addClass("active");
	switch (a) {
		case 0:
			_loadPage(".tab-content", ctx + "/agentCenter/openAccount", "", "", "", "", 2, a);
			break;
		case 1:
			_loadPage(".tab-content", ctx + "/agentCenter/memberManage", "", "", "", "", 2, a);
			break;
		case 2:
			_loadPage(".tab-content", ctx + "/agentCenter/teamRecharge", "", "", "", "", 2, a);
			break;
		case 3:
			_loadPage(".tab-content", ctx + "/agentCenter/teamWithdraw", "", "", "", "", 2, a);
			break;
		case 4:
			_loadPage(".tab-content", ctx + "/agentCenter/teamBet", "", "", "", "", 2, a);
			break;
		case 5:
			_loadPage(".tab-content", ctx + "/agentCenter/teamReport", "", "", "", "", 2, a);
			break;
		case 9:
			_loadPage(".tab-content", ctx + "/agentCenter/openAccountLinks", "", "", "", "", 2, a);
			break;
		case 10:
			_loadPage(".tab-content", ctx + "/agentCenter/teamOverView", "", "", "", "", 2, a);
			break;
		case 11:
			_loadPage(".tab-content", ctx + "/agentCenter/linksManage", "", "", "", "", 2, a);
			break;
		case 12:
			_loadPage(".tab-content", ctx + "/agentCenter/teamAccountChange", "", "", "", "", 2, a);
			break;
		case 13:
			_loadPage(".tab-content", ctx + "/qipaiReport/teamReportQP", "", "", "", "", 2, a);
			break;
		default:
			break
	}
}

function memberInfoTab(a, c) {
	if (!!a) {} else {
		$("#myTab_03").find("li").removeClass("active");
		if (c == 0) {
			$("#myTab_03").find("li:contains('个人资料')").addClass("active")
		} else {
			if (c == 1) {
				$("#myTab_03").find("li:contains('投注记录')").addClass("active")
			} else {
				if (c == 2) {
					$("#myTab_03").find("li:contains('账变明细')").addClass("active")
				} else {
					if (c == 3) {
						$("#myTab_03").find("li:contains('充值')").addClass("active")
					} else {
						if (c == 4) {
							$("#myTab_03").find("li:contains('升点')").addClass("active")
						} else {
							if (c == 5) {
								$("#myTab_03").find("li:contains('日工资设置')").addClass("active")
							}
						}
					}
				}
			}
		}
		var b = c * 1 + 1;
		if (c > 0) {
			$("#person_tab li").removeClass("active");
			$("#tab_0" + b + "").addClass("active");
			$("#manage_0" + b + "").addClass("active")
		}
	}
	$("#personInfo").modal("show");
	agent3menu(c)
}
String.prototype.trim = function () {
	return this.replace(/(^\s*)|(\s*$)/g, "")
};
Array.prototype.in_array = function (a) {
	for (i = 0; i < this.length; i++) {
		if (this[i] == a) {
			return true
		}
	}
	return false
};
Array.prototype.indexof = function (d) {
	var b = this;
	for (var c = 0; c < b.length; c++) {
		if (b[c] == d) {
			return i
		}
	}
};
Array.prototype.contains = function (b) {
	var a = this.length;
	while (a--) {
		if (this[a] === b) {
			return true
		}
	}
	return false
};
if (!Array.prototype.find) {
	Object.defineProperty(Array.prototype, "find", {
		value: function (b) {
			if (this == null) {
				throw new TypeError('"this" is null or not defined')
			}
			var f = Object(this);
			var a = f.length >>> 0;
			if (typeof b !== "function") {
				throw new TypeError("predicate must be a function")
			}
			var c = arguments[1];
			var d = 0;
			while (d < a) {
				var e = f[d];
				if (b.call(c, e, d, f)) {
					return e
				}
				d++
			}
			return undefined
		}
	})
}
if (!Array.prototype.forEach) {
	Array.prototype.forEach = function forEach(g, b) {
		var d, c;
		if (this == null) {
			throw new TypeError("this is null or not defined")
		}
		var f = Object(this);
		var a = f.length >>> 0;
		if (typeof g !== "function") {
			throw new TypeError(g + " is not a function")
		}
		if (arguments.length > 1) {
			d = b
		}
		c = 0;
		while (c < a) {
			var e;
			if (c in f) {
				e = f[c];
				g.call(d, e, c, f)
			}
			c++
		}
	}
}
Array.prototype.uniquelize = function () {
	var b = new Array();
	for (var a = 0; a < this.length; a++) {
		if (!b.contains(this[a])) {
			b.push(this[a])
		}
	}
	return b
};
Array.union = function (d, c) {
	return d.concat(c).uniquelize()
};
String.prototype.substrEndIndex = function (c) {
	var b = this;
	if (b.length <= 10) {
		return b
	}
	return b.substr(0, c) + "……"
};

function checkBankInfo() {
	if (personObj.UserRealName == "" || personObj.BankCode == "" || personObj.CardNumber == "") {
		_confirm("warning", 0, "", "请完善您的银行资料", _redirectBank, _redirectBank);
		$(".close_btn").remove()
	} else {
		checkMoneyPass()
	}
	$("#HRebate").val(personObj.HRebate);
	$("#QRebate").val(personObj.QRebate);
	$("#QARebate").val(personObj.QARebate);
	$("#XRebate").val(personObj.XRebate);
	$("#MyRebate").val(personObj.MyRebate);
	$("#stopAddChild").val(personObj.StopAddChild);
	$("#team_userID").val(personObj.MyUserID);
	$("#team_childCount").val(personObj.ChildCount);
	$("#team_teamMemberCount").val(personObj.TeamMemberCount)
}

function _redirectBank() {
	_loadPage("#_first_main", ctx + "/accountInfo/first_personal_page?index=1&&secondIndex=1&&dialogId=myBonus_bank");
	return
}

function checkMoneyPass() {
	if (isSetPayPass) {
		return
	}
	var a = ctx + "/accountInfo/checkPayOutPwdAndTransferPwd";
	$.post(a, function (b) {
		if (b.Context) {
			$.each(b.Context, function (c, d) {
				if (d.PayOutPassWord == 0) {
					$(".modal-backdrop.fade.in").remove();
					_confirm("warning", 0, "", "请完善您的资金密码", _redirectPayPass, _redirectPayPass);
					$(".close_btn").remove()
				} else {
					isSetPayPass = true
				}
			})
		}
	}, "json")
}

function _checkMoneyPass() {
	if (isSetPayPass) {
		return
	}
	var a = ctx + "/accountInfo/checkPayOutPwdAndTransferPwd";
	$.post(a, function (b) {
		if (b.Context) {
			$.each(b.Context, function (c, d) {
				if (d.PayOutPassWord == 0) {
					_confirm("warning", 0, "", "请完善您的资金密码", _redirectPayPass, _redirectPayPass);
					$(".close_btn").remove()
				} else {
					isSetPayPass = true
				}
			})
		}
	}, "json")
}

function _redirectPayPass() {
	$(".modal-backdrop").remove();
	$("#send_redPacket").modal("hide");
	var a = "#_first_main";
	var b = ctx + "/accountInfo/first_personal_page?index=1&&secondIndex=2&&dialogId=myBonus_payPass";
	_loadPage(a, b, "", function () {
		_is_show_record = 4;
		_init_lottery_id = "";
		$.head_nav(0)
	});
	return
}

function onlyNumer(b, a) {
	$(b).on("keypress", function (c) {
		if (c.keyCode >= 48 && c.keyCode <= 57 || c.keyCode == 46) {
			return true
		} else {
			return false
		}
	}).on("paste", function () {
		return false
	}).on("dragenter", function () {
		return false
	})
}
Array.prototype.remove = function (b) {
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (d) {
			var c = this.length >>> 0;
			var e = Number(arguments[1]) || 0;
			e = (e < 0) ? Math.ceil(e) : Math.floor(e);
			if (e < 0) {
				e += c
			}
			for (; e < c; e++) {
				if (e in this && this[e] === d) {
					return e
				}
			}
			return -1
		}
	}
	var a = this.indexOf(b);
	if (a > -1) {
		this.splice(a, 1)
	}
};

function accMul(d, b) {
	var a = 0,
		f = d.toString(),
		c = b.toString();
	try {
		a += f.split(".")[1].length
	} catch (g) {}
	try {
		a += c.split(".")[1].length
	} catch (g) {}
	return Number(f.replace(".", "")) * Number(c.replace(".", "")) / Math.pow(10, a)
}
Number.prototype.mul = function (a) {
	return accMul(a, this)
};

function accDiv(arg1, arg2) {
	var t1 = 0,
		t2 = 0,
		r1, r2;
	try {
		t1 = arg1.toString().split(".")[1].length
	} catch (e) {}
	try {
		t2 = arg2.toString().split(".")[1].length
	} catch (e) {}
	with(Math) {
		r1 = Number(arg1.toString().replace(".", ""));
		r2 = Number(arg2.toString().replace(".", ""));
		return (r1 / r2).mul(pow(10, t2 - t1))
	}
}

function accAdd(h, g) {
	var f, d, b, k;
	try {
		f = h.toString().split(".")[1].length
	} catch (j) {
		f = 0
	}
	try {
		d = g.toString().split(".")[1].length
	} catch (j) {
		d = 0
	}
	k = Math.abs(f - d);
	b = Math.pow(10, Math.max(f, d));
	if (k > 0) {
		var a = Math.pow(10, k);
		if (f > d) {
			h = Number(h.toString().replace(".", ""));
			g = Number(g.toString().replace(".", "")) * a
		} else {
			h = Number(h.toString().replace(".", "")) * a;
			g = Number(g.toString().replace(".", ""))
		}
	} else {
		h = Number(h.toString().replace(".", ""));
		g = Number(g.toString().replace(".", ""))
	}
	return (h + g) / b
}
Number.prototype.add = function (a) {
	return accAdd(a, this)
};
Number.prototype.div = function (a) {
	return accDiv(this, a)
};

function accSub(f, d) {
	var c, b, a, h;
	try {
		c = f.toString().split(".")[1].length
	} catch (g) {
		c = 0
	}
	try {
		b = d.toString().split(".")[1].length
	} catch (g) {
		b = 0
	}
	a = Math.pow(10, Math.max(c, b));
	h = (c >= b) ? c : b;
	return ((f * a - d * a) / a).toFixed(h)
}
Number.prototype.sub = function (a) {
	return accSub(a, this)
};

function ltrim(a) {
	return a.replace(/(^\s*)/g, "")
}

function rtrim(a) {
	return a.replace(/(\s*$)/g, "")
}

function trim(a) {
	return a.replace(/(^\s*)|(\s*$)/g, "")
}
var mathUtil = {
	getCCombination: function (d, j) {
		var f = d - j;
		if (f < 0) {
			return 0
		} else {
			if (f == 0) {
				return 1
			} else {
				if (f < j) {
					var a = mathUtil.getNtoMMultiplySum(j, d);
					var g = new BigNumber(a);
					var h = mathUtil.getMultiplySum(f);
					var e = new BigNumber(h);
					return Math.floor(g.dividedBy(e))
				} else {
					var a = mathUtil.getNtoMMultiplySum(f, d);
					var g = new BigNumber(a);
					var h = mathUtil.getMultiplySum(j);
					var e = new BigNumber(h);
					return Math.floor(g.dividedBy(e))
				}
			}
		}
	},
	getMultiplySum: function (a) {
		return mathUtil.getNtoMMultiplySum(1, a)
	},
	getAddSum: function (c) {
		var b = 0;
		for (var a = 0; a <= c; a++) {
			b += a
		}
		return b
	},
	getAddSum2: function (e, b, d) {
		var c = 0;
		for (var a = e; a >= 0 && d >= 1; a -= b, d--) {
			c += a
		}
		return c
	},
	getNtoMMultiplySum: function (e, a) {
		var d = new BigNumber(1);
		if (a < e) {
			return 0
		}
		if (a == e) {
			return 1
		}
		for (var c = e + 1; c <= a; c++) {
			var b = new BigNumber(c);
			d = b.times(d)
		}
		return d
	},
	getACombination: function (a, b) {
		return mathUtil.getNtoMMultiplySum(a - b, a)
	},
	getNums: function (c, a) {
		var d = new Array(c);
		for (var b = 0; b < c; b++) {
			d[b] = Math.floor((Math.random() * a))
		}
		return d
	},
	getSameNums: function (e, c, a) {
		var d = new Array(c);
		for (var b = 0; b < c; b++) {
			d[b] = Math.floor((Math.random() * a)) + e
		}
		return d
	},
	getDifferentNums: function (f, e) {
		var d = new Array(f);
		var c = e.length;
		for (var b = 0; b < f; b++) {
			var a = Math.floor((Math.random() * c));
			d[b] = e[a];
			e[a] = e[c - 1];
			c--
		}
		return d
	},
	getInts: function (e, a) {
		var d = new Array(a - e + 1);
		var c = e;
		for (var b = 0; b < a - e + 1; b++, c++) {
			d[b] = c
		}
		return d
	},
	getRandomNum: function (c, a) {
		var b = Math.floor((Math.random() * (a - c) + c));
		return b
	},
	getZuSanHeZhiNote: function (b) {
		var a = 0;
		switch (b) {
			case 1:
			case 3:
			case 24:
			case 26:
				a = 1;
				break;
			case 2:
			case 25:
				a = 2;
				break;
			case 4:
			case 5:
			case 6:
			case 21:
			case 22:
			case 23:
				a = 3;
				break;
			case 7:
			case 9:
			case 12:
			case 15:
			case 18:
			case 20:
				a = 4;
				break;
			case 8:
			case 10:
			case 11:
			case 13:
			case 14:
			case 16:
			case 17:
			case 19:
				a = 5;
				break;
			default:
				break
		}
		return a
	},
	getErXingZhiXuanHeZhiNote: function (b) {
		var a = 0;
		switch (b) {
			case 0:
			case 18:
				a = 1;
				break;
			case 1:
			case 17:
				a = 2;
				break;
			case 2:
			case 16:
				a = 3;
				break;
			case 3:
			case 15:
				a = 4;
				break;
			case 4:
			case 14:
				a = 5;
				break;
			case 5:
			case 13:
				a = 6;
				break;
			case 6:
			case 12:
				a = 7;
				break;
			case 7:
			case 11:
				a = 8;
				break;
			case 8:
			case 10:
				a = 9;
				break;
			case 9:
				a = 10;
				break;
			default:
				break
		}
		return a
	},
	getErXingZuXuanHeZhiNote: function (b) {
		var a = 0;
		switch (b) {
			case 0:
			case 1:
			case 2:
			case 16:
			case 17:
			case 18:
				a = 1;
				break;
			case 3:
			case 4:
			case 14:
			case 15:
				a = 2;
				break;
			case 5:
			case 6:
			case 12:
			case 13:
				a = 3;
				break;
			case 7:
			case 8:
			case 10:
			case 11:
				a = 4;
				break;
			case 9:
				a = 5;
				break;
			default:
				break
		}
		return a
	},
	getZuLiuHeZhiNote: function (b) {
		var a = 0;
		switch (b) {
			case 3:
			case 4:
			case 23:
			case 24:
				a = 1;
				break;
			case 5:
			case 22:
				a = 2;
				break;
			case 6:
			case 21:
				a = 3;
				break;
			case 7:
			case 20:
				a = 4;
				break;
			case 8:
			case 19:
				a = 5;
				break;
			case 9:
			case 18:
				a = 7;
				break;
			case 10:
			case 17:
				a = 8;
				break;
			case 11:
			case 16:
				a = 9;
				break;
			case 12:
			case 13:
			case 14:
			case 15:
				a = 10;
				break;
			default:
				break
		}
		return a
	},
	getZhiXuanHeZhiNote: function (b) {
		var a = 0;
		switch (b) {
			case 0:
			case 27:
				a = 1;
				break;
			case 1:
			case 26:
				a = 3;
				break;
			case 2:
			case 25:
				a = 6;
				break;
			case 3:
			case 24:
				a = 10;
				break;
			case 4:
			case 23:
				a = 15;
				break;
			case 5:
			case 22:
				a = 21;
				break;
			case 6:
			case 21:
				a = 28;
				break;
			case 7:
			case 20:
				a = 36;
				break;
			case 8:
			case 19:
				a = 45;
				break;
			case 9:
			case 18:
				a = 55;
				break;
			case 10:
			case 17:
				a = 63;
				break;
			case 11:
			case 16:
				a = 69;
				break;
			case 12:
			case 15:
				a = 73;
				break;
			case 13:
			case 14:
				a = 75;
				break;
			default:
				break
		}
		return a
	},
	getSanXingZuXuanHeZhiNote: function (b) {
		var a = 0;
		switch (b) {
			case 1:
			case 26:
				a = 1;
				break;
			case 2:
			case 3:
			case 24:
			case 25:
				a = 2;
				break;
			case 4:
			case 23:
				a = 4;
				break;
			case 5:
			case 22:
				a = 5;
				break;
			case 6:
			case 21:
				a = 6;
				break;
			case 7:
			case 20:
				a = 8;
				break;
			case 8:
			case 19:
				a = 10;
				break;
			case 9:
			case 18:
				a = 11;
				break;
			case 10:
			case 17:
				a = 13;
				break;
			case 11:
			case 12:
			case 15:
			case 16:
				a = 14;
				break;
			case 13:
			case 14:
				a = 15;
				break;
			default:
				break
		}
		return a
	},
	getSanKuadu: function (b) {
		var a = 0;
		switch (b) {
			case 0:
				a = 10;
				break;
			case 1:
			case 9:
				a = 54;
				break;
			case 2:
			case 8:
				a = 96;
				break;
			case 3:
			case 7:
				a = 126;
				break;
			case 4:
			case 6:
				a = 144;
				break;
			case 5:
				a = 150;
				break
		}
		return a
	},
	getErKuadu: function (b) {
		var a = 0;
		switch (b) {
			case 0:
			case 5:
				a = 10;
				break;
			case 1:
				a = 18;
				break;
			case 2:
				a = 16;
				break;
			case 3:
				a = 14;
				break;
			case 4:
				a = 12;
				break;
			case 6:
				a = 8;
				break;
			case 7:
				a = 6;
				break;
			case 8:
				a = 4;
				break;
			case 9:
				a = 2;
				break
		}
		return a
	}
};

function getArraySelect(g, f, e) {
	var b = 0;
	for (var d = 0; d < f.length; d++) {
		var a = 0;
		for (var c = 0; c < e.length; c++) {
			if (f[d] != e[c]) {
				a++
			}
		}
		b += mathUtil.getCCombination(a, g)
	}
	return b
}

function getArrayByArray2(f, d, c) {
	var e = new Array(f);
	for (var a = 0; a < d.length; a++) {
		for (var b = 0; b < c.length; b++) {
			if (d[a] != c[b]) {
				e.push(c[b])
			}
		}
	}
	return e
}

function handleSingleStr(c) {
	var d = [];
	var a = c.split(/\D/).join("\n").split("\n");
	for (var b = 0; b < a.length; b++) {
		if (a[b] != "") {
			d.push(a[b])
		}
	}
	return d
}

function fomatFloat(a, b) {
	a = a + "";
	if (!b) {
		b = 2
	}
	if (a.indexOf(".") == -1) {
		return a
	}
	return a.substr(0, a.indexOf(".") + (b + 1))
}

function _confirm(a, g, m, b, e, l, k, j, d) {
	var f;
	var c = new Modal({
		isSuccess: a,
		zIndex: 999999,
		title: ("" == m) ? "温馨提示" : m,
		maxWidth: 400,
		content: b,
		onOk: function () {
			f = clearInterval(f);
			if ("" != e && typeof e != "undefined") {
				if (typeof e == "function") {
					e()
				} else {
					e
				}
			}
		},
		cancelDisplay: g == 0 ? false : true,
		onCancel: function () {
			f = clearInterval(f);
			if ("" != l && typeof l != "undefined") {
				if (typeof l == "function") {
					l()
				} else {
					l
				}
			}
		},
		buttons: j,
		buttonName: d
	});
	c.open();
	if ("" != k && typeof k != "undefined") {
		$(c.$modalFooter).find(".btn-ok").text("确定（" + accDiv(k, 1000) + "s）");
		setTimeout(function () {
			c.hide();
			f = clearInterval(f);
			if ("" != e && typeof e != "undefined") {
				if (typeof e == "function") {
					e()
				} else {
					e
				}
			}
		}, k);
		var h = k;
		f = setInterval(function () {
			h = h - 1000;
			$(c.$modalFooter).find(".btn-ok").text("确定（" + accDiv(h, 1000) + "s）")
		}, 1000)
	}
}

function _tips_common(d, c, b, a) {
	$("#" + d).text(c);
	if ("" != b && typeof b != "undefined") {
		if (typeof b == "function") {
			b()
		} else {
			b
		}
	}
	if ("" != a && typeof a != "undefined") {
		setTimeout(function () {
			$("#" + d).text("")
		}, a)
	}
}

function _tips_alert(c, b, f, g, m, k) {
	var a = 5000;
	if ("" != k && typeof k != "undefined") {
		a = k
	}
	toastr.options.onHidden = function () {
		if ("" != g && typeof g != "undefined") {
			if (typeof g == "function") {
				g()
			} else {
				g
			}
		}
	};
	toastr.options = {
		positionClass: "toast-top-center",
		showDuration: "300",
		hideDuration: "1000",
		timeOut: a,
		extendedTimeOut: "1000",
		showEasing: "swing",
		hideEasing: "linear",
		showMethod: "fadeIn",
		hideMethod: "fadeOut",
		onHidden: toastr.options.onHidden
	};
	if (b == 1) {
		toastr.success(f)
	} else {
		if (b == 2) {
			toastr.warning(f)
		} else {
			if (b == 3) {
				toastr.error(f)
			} else {
				toastr.info(f)
			}
		}
	}
	var d = 0,
		l = 0,
		n = 0;
	if (c == "" || typeof c == "undefined") {
		d = $(window).scrollTop();
		n = $(window).height();
		window_width = $(window).width()
	} else {
		d = $(c).scrollTop();
		n = $(c).outerHeight(true);
		window_width = $(c).outerWidth()
	}
	var h = $("#toast-container").width();
	var j = n > 56 ? ((n - 56) * 382 / 1000) : 0,
		e = window_width > h ? ((window_width - h) / 2) : 0;
	$(".toast-top-center").css({
		top: j + "px",
		left: e + "px"
	})
}

function _bet_confirm(g, d, f, b) {
	$(".ui-popup,.ui-popup-modal,.ui-popup-backdrop").remove();
	$("#add_div, #iframe1").css({
		display: "none"
	});
	var a;
	var c = bet_dialog({
		zIndex: 999999,
		title: "提示",
		content: g + (("" != b && typeof b != "undefined") ? "（" + accDiv(b, 1000) + "s）" : ""),
		cancelDisplay: false,
		cancel: function () {
			a = clearInterval(a);
			if ("" != f && typeof f != "undefined") {
				if (typeof f == "function") {
					f()
				} else {
					f
				}
			}
		}
	}).showModal();
	if ("" != b && typeof b != "undefined") {
		setTimeout(function () {
			c.close().remove();
			a = clearInterval(a);
			if ("" != d && typeof d != "undefined") {
				if (typeof d == "function") {
					d()
				} else {
					d
				}
			}
		}, b);
		var e = b;
		a = setInterval(function () {
			e = e - 1000;
			document.getElementById("content:" + c.id).innerHTML = g + "（" + accDiv(e, 1000) + "s）"
		}, 1000)
	}
}

function getHourToC(a) {
	if (a >= 0 && a <= 5) {
		return "凌晨"
	} else {
		if (a > 5 && a <= 10) {
			return "上午"
		} else {
			if (a > 10 && a <= 12) {
				return "中午"
			} else {
				if (a > 12 && a <= 17) {
					return "下午"
				} else {
					if (a > 17 && a <= 23) {
						return "晚上"
					} else {
						return ""
					}
				}
			}
		}
	}
}

function redirectToLottery() {
	if ($("#_lottery_nav").hasClass("active")) {
		return
	}
	zzInterval = clearInterval(zzInterval);
	zzInterval = null;
	SendReq.isRun = true;
	var a = Lottery.lotterySelect(lotteryList);
	if (a[0]) {
		lotteryId = 12;
		_loadPage("#_first_main", ctx + "/lottery/fist_main_page")
	} else {
		if (a[1] != 50) {
			lotteryId = a[1];
			_loadPage("#_first_main", ctx + "/lottery/fist_main_page")
		} else {
			lotteryId = 50;
			_loadPage("#_first_main", ctx + "/lottery/mmc_main_page")
		}
	}
	_is_show_record = "";
	createGameDiv()
}
Date.prototype.Format = function (a) {
	var c = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		S: this.getMilliseconds()
	};
	if (/(y+)/.test(a)) {
		a = a.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
	}
	for (var b in c) {
		if (new RegExp("(" + b + ")").test(a)) {
			a = a.replace(RegExp.$1, (RegExp.$1.length == 1) ? (c[b]) : (("00" + c[b]).substr(("" + c[b]).length)))
		}
	}
	return a
};

function getBetContent(h, n, m, k, w, l) {
	if (w >= l) {
		n = n.split(" ", l).toString().replace(/\,/g, " ")
	}
	var p = "";
	var d = [];
	var v = false;
	var b;
	var e;
	var x, c;
	var z = n.indexOf("$") > -1;
	z ? e = c : e = n;
	if (z) {
		x = n.split("$")[0];
		c = n.split("$")[1];
		b = c.split("")
	} else {
		b = e.split("|")
	}
	var y = ["大", "小", "单", "双"],
		f = /^(12|14|50|51|53|55|56|57|58|59|66|71|72|73|74|75|76|86|43|44|48|49|93|94)(11|79|80|81|82)$/,
		a = ["豹子", "顺子", "对子", "半顺", "杂六"],
		g = /^(12|14|50|51|53|55|56|57|58|59|66|71|72|73|74|75|76|86|43|44|48|49|93|94)(11|79|85|88|91)$/,
		o = ["龙", "虎", "和"],
		r =
		/^(12|14|50|51|53|55|56|57|58|59|66|71|72|73|74|75|76|86|43|44|48|49|93|94)(94|95|96|97|98|99|100|101|102|103|109|110|111|112|113|114|115|116|117|118)$/;
	wqbsgArr = ["万", "千", "百", "十", "个"];
	_dxdsArr = ["大", "小", "单", "双", "尾大", "尾小", "和单", "和双"], _dxdsReg = /^(90)(20)$/, _dxhArr = ["大", "小", "和"], _dxhReg =
		/^(90)(21)$/, _sjArr = ["春", "夏", "秋", "冬", "东", "南", "西", "北"], _sjReg = /^(90)(22)$/, _wxArr = ["金", "木", "水", "火",
			"土"
		], _wxReg = /^(90)(23)$/, _lhArr = ["1V2", "1V3", "1V4", "1V5", "1V6", "1V7", "1V8", "2V3", "2V4", "2V5", "2V6",
			"2V7", "2V8", "7V8", "3V4", "3V5", "3V6", "3V7", "3V8", "6V7", "6V8", "4V5", "4V6", "4V7", "4V8", "5V6", "5V7",
			"5V8"
		], _lhReg = /^(90)(24|25)$/, arr1 = ["单", "双"], arr1Reg = /^(9|79|80|91|92)11$/, arr2 = ["大", "小", "和"], arr2Reg =
		/^(9|79|80|91|92)12$/, arr3 = ["奇", "偶", "和"], arr3Reg = /^(9|79|80|91|92)13$/, arr4 = ["上", "下", "中"], arr4Reg =
		/^(9|79|80|91|92)14$/, arr5 = ["大单", "大双", "小单", "小双"], arr5Reg = /^(9|79|80|91|92)15$/, arr6 = ["金", "木", "水", "火",
			"土"
		], arr6Reg = /^(9|79|80|91|92)16$/, pkArr = ["大", "小", "单", "双"], pkArrReg = /^(10|11)(16|17|18|19|20|21|31|32)$/;
	pkLHArr = ["龙", "虎"], pkLHArrReg = /^(10|11)(22|23|24)$/;
	k3Arr = ["大", "小", "单", "双"], k3ArrReg = /^(21|22|88|89|26|81|82|83)(16|17|18)$/;
	if (_lhReg.test(h)) {
		p = n.replace(/\|/g, "V");
		return p
	}
	for (var u = 0; u < b.length; u++) {
		var t = b[u];
		var q = t.split(",");
		for (var s = 0; s < q.length; s++) {
			if (f.test(h)) {
				d = y
			} else {
				if (g.test(h)) {
					d = a
				} else {
					if (r.test(h)) {
						d = o
					} else {
						if (z) {
							d = wqbsgArr
						} else {
							if (arr1Reg.test(h)) {
								d = arr1
							} else {
								if (arr2Reg.test(h)) {
									d = arr2
								} else {
									if (arr3Reg.test(h)) {
										d = arr3
									} else {
										if (arr4Reg.test(h)) {
											d = arr4
										} else {
											if (arr5Reg.test(h)) {
												d = arr5
											} else {
												if (arr6Reg.test(h)) {
													d = arr6
												} else {
													if (pkArrReg.test(h)) {
														d = pkArr
													} else {
														if (pkLHArrReg.test(h)) {
															d = pkLHArr
														} else {
															if (k3ArrReg.test(h)) {
																d = k3Arr
															} else {
																if (_dxdsReg.test(h)) {
																	d = _dxdsArr
																} else {
																	if (_dxhReg.test(h)) {
																		d = _dxhArr
																	} else {
																		if (_sjReg.test(h)) {
																			d = _sjArr
																		} else {
																			if (_wxReg.test(h)) {
																				d = _wxArr
																			} else {
																				v = true;
																				break
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			if (q[s] == "*") {
				p += "*，"
			} else {
				p += d[q[s]] + "，"
			}
		}
		if (p.substr(p.length - 1, p.length) == "，") {
			p = p.substr(0, p.length - 1)
		}
		p += "|"
	}
	if (p.substr(p.length - 1, p.length) == "|") {
		p = p.substr(0, p.length - 1)
	}
	if (z) {
		if (/^(12|14|50|51|53|55|56|57|58|59|66|71|72|73|74|75|76|86|43|44|93|94)(63)$/.test(h) || m == 8) {
			x = x.replace(/[\||\,]/g, "")
		}
		p = x + "#" + p
	}
	if (v) {
		if (/^(4|5|16|61|63|77|78|85)(01|09|11)$/.test(h) || /^(10|11)/.test(k)) {
			if (m == 8) {
				p = n.replace(/\s/g, ",").replace(/[\|]/g, " ")
			} else {
				p = n
			}
		} else {
			if (/^(4|5|16|61|63|77|78|85)(02|03|04|05|06|07|08|10|12)$/.test(h) && k != 51 && k != 50) {
				if (m == 8) {
					p = n.replace(/\s/g, "|").replace(/\,/g, " ").replace(/\|/g, ",")
				} else {
					p = n
				}
			} else {
				if (m == 8) {
					p = n.replace(/[\||\,]/g, "")
				} else {
					p = n
				}
			}
		}
	}
	return p
}

function getScreen(d, c, b) {
	if (d != "" && d != null) {
		if (c == 0) {
			d = d.substring(0, 1) + "**"
		} else {
			if (c == 1) {
				var a = d.indexOf("@");
				if (a == 1) {
					d = "*****" + d.substring(1)
				} else {
					if (a == 2) {
						d = d.substring(0, 1) + "*****" + d.substring(2)
					} else {
						if (a >= 3) {
							d = d.substring(0, 3) + "*****" + d.substring(a)
						}
					}
				}
			} else {
				if (c == 2) {
					d = d.substring(0, 3) + "*****" + d.substring(d.length - 2, d.length)
				} else {
					if (c == 3) {
						d = "***************" + d.substring(d.length - 4, d.length)
					} else {
						if (c == 4) {
							d = d.substring(0, 3) + "****" + d.substring(d.length - 4, d.length)
						} else {
							if (c == 5) {
								d = d.substring(0, 1) + "****************" + d.substring(d.length - 1, d.length)
							} else {
								if (c == 6) {
									if (d.length > b) {
										d = d.substr(0, b) + "…"
									}
								}
							}
						}
					}
				}
			}
		}
	} else {
		return ""
	}
	return d
}

function getStrLen(a) {
	if (a == null) {
		return 0
	}
	if (typeof a != "string") {
		a += ""
	}
	return a.replace(/[^\x00-\xff]/g, "01").length
}

function toNavPage(a) {
	switch (a) {
		case 0:
			_loadPage("#myTab_Content0", ctx + "/accountInfo/personal_tab_page");
			break;
		case 1:
			_loadPage("#myTab_Content0", ctx + "/accountInfo/recharge_tab_page");
			break;
		case 2:
			_loadPage(".personal .swithBox", ctx + "/accountInfo/account_tab_page");
			break;
		case 3:
			_loadPage("#myTab_Content0", ctx + "/accountInfo/gameReport_tab_page");
			break;
		case 4:
			_loadPage("#myTab_Content0", ctx + "/accountInfo/agent_tab_page");
			break;
		case 5:
			_loadPage("#myTab_Content0", ctx + "/accountInfo/site_message_tab");
			break;
		case 6:
			_loadPage("#myTab_Content0", ctx + "/accountInfo/deedManage_tab");
			break;
		case 7:
			_loadPage("#myTab_Content0", ctx + "/accountInfo/qipaiReport_tab");
			break;
		case 8:
			_loadPage("#myTab_Content0", ctx + "/accountInfo/vrReport_tab");
			break;
		case 9:
			_loadPage("#myTab_Content0", ctx + "/accountInfo/redPacket_tab");
			break;
		default:
			break
	}
}

function _gameRecordChange() {
	if (_is_show_record == 4) {
		_loadPage("#_first_main", ctx + "/accountInfo/first_personal_page?index=1&&secondIndex=10", "", function () {
			_is_show_record = 4
		})
	} else {
		var a = getLeftAndTop("#_gameRecord_lottery");
		$("#_gameRecord_lottery").css({
			display: "block",
			top: (a.t + 210),
			left: a.l
		});
		secBoard(0, "_gameRecord_lottery");
		_loadPage("#_gameRecord_lottery .swithBox", ctx + "/myReport/_betRecord", "", "", "", "NotStop")
	}
}

function clear_gameRecord() {
	$("#_gameRecord_lottery .swithBox").empty()
}

function copyTxt(b, a, c) {
	var b = document.getElementById(b),
		d = document.getElementById(a);
	if (null == b || typeof b == "undefined") {
		return false
	}
	b.onclick = function () {
		d.focus();
		d.select();
		document.execCommand("Copy", false, null);
		d.blur();
		if ("" != c && typeof c != "undefined") {
			if (typeof c == "function") {
				c()
			} else {
				c
			}
		}
	}
}

function getInternetExplorerVersion() {
	var c = -1;
	if (navigator.appName == "Microsoft Internet Explorer") {
		var a = navigator.userAgent;
		var b = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
		if (b.exec(a) != null) {
			c = parseFloat(RegExp.$1)
		}
	}
	return c
}

function getDefaultLottery() {
	var a = "";
	if (_is_show_record != "4") {
		if (null != LotteryUitl.lotteryId && "" != LotteryUitl.lotteryId) {
			a = LotteryUitl.lotteryId
		}
	}
	return a
}

function isEmptyObject(b) {
	for (var a in b) {
		return false
	}
	return true
}
Array.prototype.in_array = function (a) {
	for (i = 0; i < this.length; i++) {
		if (this[i] == a) {
			return true
		}
	}
	return false
};
Array.prototype.indexof = function (d) {
	var b = this;
	for (var c = 0; c < b.length; c++) {
		if (b[c] == d) {
			return i
		}
	}
};
Array.prototype.contains = function (b) {
	var a = this.length;
	while (a--) {
		if (this[a] === b) {
			return true
		}
	}
	return false
};
Array.prototype.uniquelize = function () {
	var b = new Array();
	for (var a = 0; a < this.length; a++) {
		if (!b.contains(this[a])) {
			b.push(this[a])
		}
	}
	return b
};
Array.union = function (d, c) {
	return d.concat(c).uniquelize()
};

function checkHeadIcon() {
	var c = personObj;
	if (c.ChildCount <= 0) {
		$("input[name='_superior']:eq(1)").hide()
	}
	_head_icon_num = c.HeadPortrait;
	if ("" == _head_icon_num || typeof _head_icon_num == "undefined") {
		_head_icon_num = "1"
	}
	$("#_user_head").attr("src", ctx + "/resources/images/headicon/admin_photo_" + _head_icon_num + ".png");
	var b = "";
	for (var a = 1; a <= 12; a++) {
		if (_head_icon_num == a) {
			b += '<li class="active" flag=' + a + '><img src="' + ctx + "/resources/images/headicon/admin_photo_" + a +
				'.png"><span class="photo_active"></span></li>'
		} else {
			b += "<li flag=" + a + '><img src="' + ctx + "/resources/images/headicon/admin_photo_" + a + '.png"></li>'
		}
	}
	$("#user_icon").html(b);
	$("#user_icon img").click(function () {
		$("span.photo_active").remove();
		$("#user_icon li").removeClass("active");
		$(this).parent().addClass("active");
		$(this).after('<span class="photo_active"></span>')
	})
}

function setHeadIcon(b, a) {
	$.post(ctx + "/accountInfo/setHeadIcon", {
		headIcon: a
	}, function (c) {
		if (c.SystemState == "64") {
			if (c.SetState == "1") {
				_head_icon_num = a;
				if ("" == a) {
					a = 1
				}
				personObj.HeadPortrait = a;
				$("#_user_head, #user_icon_top").attr("src", ctx + "/resources/images/headicon/admin_photo_" + _head_icon_num +
					".png");
				$("#myPhoto").modal("hide");
				checkHeadIcon()
			} else {
				_confirm("error", 0, "", "系统繁忙， 请稍后重试", "", "", 3000)
			}
		}
	}, "json")
}


function getUserCenterDetail() {
	personObj.UserName && $("#msg_userName").val(personObj.UserName);
	myUserID = personObj.MyUserID;
	$("#msg_userID").val(personObj.MyUserID);
	$("#HRebate").val(personObj.HRebate);
	$("#QRebate").val(personObj.QRebate);
	$("#QARebate").val(personObj.QARebate);
	$("#XRebate").val(personObj.XRebate);
	$("#MyRebate").val(personObj.MyRebate);
	$("#stopAddChild").val(personObj.StopAddChild);
	$("#team_userID").val(personObj.MyUserID);
	$("#team_childCount").val(personObj.ChildCount);
	$("#team_teamMemberCount").val(personObj.TeamMemberCount)
}

function getByteLen(e) {
	var b = 0;
	for (var d = 0; d < e.length; d++) {
		var c = e.charAt(d);
		if (c.match(/[^\x00-\xff]/ig) != null) {
			b += 2
		} else {
			b += 1
		}
	}
	return b
}

function checkMoney(a) {
	$("#" + a).keyup(function () {
		var c = $(this).val().match(/\d+\.?\d{0,2}/);
		var b = "";
		if (c != null) {
			b = c[0]
		}
		$(this).val(b)
	}).change(function () {
		$(this).keypress();
		var b = $(this).val();
		if (/\.$/.test(b)) {
			$(this).val(b.substr(0, b.length - 1))
		}
	})
}
var _current_userNick_name = "";

function updateNickName() {
	var f = $("#nickName").val();
	var b = /^[0-9a-zA-Z\u4e00-\u9fa5]+$/;
	var e = f.replace(/[^\x00-\xff]/g, "oo").length;
	if (f == "") {
		_confirm("warning", 0, "", "请输入昵称");
		return
	} else {
		if ((e < 2) || (e > 8)) {
			_confirm("warning", 0, "", "由2-8个字符组成");
			return
		}
	}
	var d = {};
	d.NickName = f;
	d.Type = 1;
	d.IsShow = 0;
	var a = ctx + "/accountInfo/modifyUserInfo";
	var c = {
		message: json2str(d)
	};
	$(".btn.btn-nickname").attr("disabled", "disabled");
	$.post(a, c, function (g) {
		if (g.ModifyComplete) {
			personObj.NickName = f;
			$("#_lottery_userName").html(f);
			_confirm("success", 0, "", "保存成功", reloadNickName, reloadNickName);
			localStorage.setItem("_person_info_", JSON.stringify(personObj));
			$("#myModal_nickName").modal("hide")
		} else {
			if (g.RepeatResult == -1) {
				_confirm("error", 0, "", "昵称已存在")
			} else {
				_confirm("error", 0, "", "系统繁忙,请稍后在试")
			}
		}
		$(".btn.btn-nickname").removeAttr("disabled");
		$(".info_box ._login_user_userName").text(f).attr("title", f)
	}, "json")
}

function reloadNickName() {
	$("#_person_user_").text(personObj.NickName).attr("title", personObj.NickName);
	$("#_login_user_userName_drop").text(personObj.NickName).attr("title", personObj.NickName);
	$("#_login_user_userName").text(personObj.NickName).attr("title", personObj.NickName)
}

function checkGAType() {
	_gaRequest = true;
	if ("" != _google_verifyKey && typeof _google_verifyKey != "undefined") {
		_isBindGA = true;
		$("#_bind_bind_ga").hide();
		$("#_bind_unbind_ga, #_bind_valid_type").show()
	} else {
		_isBindGA = false
	}
	$("#_withdraw_google, #_login_google, #_pay_google").hide();
	$("#_withdraw_google_pass, #_login_google_pass, #_pay_google_pass").val("");
	if ("" != _google_valid_type && typeof _google_valid_type != "undefined") {
		var a = _google_valid_type.split(",");
		if (a.contains("2")) {
			$("#_withdraw_google").show()
		}
		if (a.contains("3")) {
			$("#_login_google").show()
		}
		if (a.contains("4")) {
			$("#_pay_google").show()
		}
		$("input[name='_ga_valid_type']").each(function (d, b) {
			for (var c = 0; c < a.length; c++) {
				if ($(this).val() == a[c]) {
					$(this).prop("checked", true);
					break
				}
			}
		})
	}
}

function isToubao(b) {
	var a = false;
	b = b + "";
	var c = b.substr(0, 2);
	if (b.length == 4 && ((c == 21) || (c == 88) || (c == 89)) && (parseInt(b.substr(2)) >= 10)) {
		a = true
	} else {
		if (b.length == 5 && (b.substr(0, 2) == 12) && (parseInt(b.substr(2)) >= 109)) {
			a = true
		}
	}
	return a
}

function getMultiple(b, a) {
	return isToubao(a) ? 1 : b
}

function getMode(b, a) {
	return isToubao(a) ? "元模式" : Lottery.yjf(b) + "模式"
}

function redirectBonus() {
	$("#quick-bet-modal").hasClass("in") && $("#quick-bet-modal").modal("hide");
	$(".modal-backdrop").length && $(".modal-backdrop").remove();
	var a = "#_first_main";
	var b = ctx + "/accountInfo/first_personal_page?index=4&&secondIndex=3";
	_loadPage(a, b, "", function () {
		_is_show_record = 4;
		_init_lottery_id = "";
		$.head_nav(0)
	})
}

function getUserGroupPayment(a) {
	$.post(ctx + "/financeCenter/GetUserGroupPayment", function (b) {
		if (b.SystemState == 64) {
			userGroupPayment = b;
			if (typeof a == "function") {
				a()
			} else {
				a
			}
		}
	}, "json")
}

function getPersonObj(a) {
	var b = JSON.parse(localStorage.getItem("_person_info_"));
	if (null != b) {
		personObj = b;
		userDetailCallBack(personObj, a);
		return false
	}
	$.post(ctx + "/accountInfo/GetUserDetailNew", function (c) {
		personObj = {};
		if (c.SystemState == 64) {
			$.extend(personObj, c);
			localStorage.setItem("_person_info_", JSON.stringify(c));
			userDetailCallBack(personObj, a)
		}
	}, "json")
}

function userDetailCallBack(a, b) {
	userDetailAfterEvent();
	if (!a.IsAgent) {
		$("#dl").hide()
	}
	if (typeof b === "function") {
		b()
	}
}

function formatMoney(b) {
	b = b + "";
	var a = b.indexOf(".");
	if (a != -1) {
		b = b.substr(0, a + 3)
	}
	return b
}

function onkeypress(b) {
	var a = b.charCode ? b.charCode : b.keyCode;
	if (a >= 48 && a <= 57 || a == 8) {
		return true
	} else {
		return false
	}
}

function getIconByCardName(b) {
	var a = new Array();
	if ("abc" == b) {
		a[0] = "nongyeyinxing1";
		a[1] = "中国农业银行"
	} else {
		if ("boc" == b) {
			a[0] = "zhongguoyinhang";
			a[1] = "中国银行"
		} else {
			if ("icbc" == b) {
				a[0] = "gongshangyinhang";
				a[1] = "中国工商银行"
			} else {
				if ("gdb" == b) {
					a[0] = "guangfayinxing";
					a[1] = "广发银行"
				} else {
					if ("ceb" == b) {
						a[0] = "guangdayinxing";
						a[1] = "中国光大银行"
					} else {
						if ("bob" == b) {
							a[0] = "beijingyinhang";
							a[1] = "北京银行"
						} else {
							if ("ccb" == b) {
								a[0] = "jiansheyinhang";
								a[1] = "中国建设银行"
							} else {
								if ("comm" == b) {
									a[0] = "jiaotongyinhang";
									a[1] = "交通银行"
								} else {
									if ("cmb" == b) {
										a[0] = "zhaoshangyinhang";
										a[1] = "招商银行"
									} else {
										if ("cib" == b) {
											a[0] = "xingyeyinhang";
											a[1] = "兴业银行"
										} else {
											if ("cmbc" == b) {
												a[0] = "305100000014";
												a[1] = "民生银行"
											} else {
												if ("psbc" == b) {
													a[0] = "youzhengyinhang";
													a[1] = "中国邮政储蓄银行"
												} else {
													if ("hzb" == b) {
														a[0] = "hangzhouyinhang";
														a[1] = "杭州银行"
													} else {
														if ("citic" == b) {
															a[0] = "zhongxinyinxing";
															a[1] = "中信银行"
														} else {
															if ("bos" == b) {
																a[0] = "shanghaiyinhang";
																a[1] = "上海银行"
															} else {
																if ("spdb" == b) {
																	a[0] = "pufayinhang";
																	a[1] = "上海浦东发展银行"
																} else {
																	if ("cpb" == b) {
																		a[0] = "pinganyinhang";
																		a[1] = "平安银行"
																	} else {
																		if ("hxb" == b) {
																			a[0] = "huaxiayinhang";
																			a[1] = "华夏银行"
																		} else {
																			if ("czb" == b) {
																				a[0] = "zheshangyinhang";
																				a[1] = "浙商银行"
																			} else {
																				if ("cbhb" == b) {
																					a[0] = "bohaiyinhang";
																					a[1] = "渤海银行"
																				} else {
																					if ("bod" == b) {
																						a[0] = "313602088017";
																						a[1] = "东莞银行"
																					} else {
																						if ("gzb" == b) {
																							a[0] = "guangzhouyinhang";
																							a[1] = "广州银行"
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return a
}
var thirdPartList = [];
var thirdPartyIds = [];
var vrChannelsList = [];

function getThirdPartyIsShowInfo(a) {
	LotterySort.initLotteryMenu();
	initVRLotteryMenu();
	$.post(ctx + "/financeCenter/thirdPartyTransferDirection", function (b) {
		if (b.SystemState == 64) {
			thirdPartList = b.TransferDirection;
			if (thirdPartList != null && thirdPartList.length > 0) {
				thirdPartList.forEach(function (c) {
					thirdPartyIds.push(c.ThirdpartyValue)
				});
				$(".transefer-btn").show()
			} else {
				$(".transefer-btn").remove()
			}
			if ($.inArray(3, thirdPartyIds) != -1) {
				$("#lottery_vr a:contains('VR彩票')").unbind("click");
				getVRChannels()
			}
		}
		if (typeof a == "function") {
			a()
		}
	}, "json")
}

function getVRChannels() {
	$.post(ctx + "/financeCenter/vrQueryChannelsInfo", function (c) {
		if (c.SystemState == 64) {
			if (c.ResultCode != "1") {
				return false
			}
			var b = JSON.parse(c.ChannelsInfo);
			if (b != null && b != "") {
				var a = "";
				vrChannelsList = b.channelDetails;
				vrChannelsList.forEach(function (d) {
					if (d.channelState == 1) {
						a += '<li><a onclick="thirdLoginNew(3,' + d.channelID + ')" href="javascript:void(0)">' + d.channelName +
							"</a></li>"
					} else {
						a += '<li><a onclick="thirdLoginNew(3,' + d.channelID + ')" href="javascript:void(0)">' + d.channelName +
							"</a></li>"
					}
				});
				$("#collapse_vr ul").html(a)
			}
			$(".category").click(function () {
				$(".category").find("i.glyphicon-minus").addClass("glyphicon-plus").removeClass("glyphicon-minus");
				var d = $(this).parents(".panel-heading").next("div").hasClass("in");
				var f = LotterySort;
				var e = $(".category").parents(".panel-heading").next("div").find("a");
				if (d) {
					$(this).find("i").removeClass("glyphicon-minus").addClass("glyphicon-plus")
				} else {
					$(this).find("i").removeClass("glyphicon-plus").addClass("glyphicon-minus")
				}
			})
		}
	}, "json")
}

function initVRLotteryMenu() {
	var a = "";
	a += '<div class="panel panel-default"><div class="panel-heading" role="tab" id="lottery_vr"><h4 class="panel-title">';
	a +=
		'<a role="button" data-toggle="collapse" data-parent="#lottery_all" href="#collapse_vr" aria-expanded="true" class="category"><img src="' +
		ctx + '/resources/images/lottery_list6.png"><span>VR彩票</span><i class="glyphicon glyphicon-plus"></i></a></h4></div>';
	a +=
		'<div id="collapse_vr" class="panel-collapse collapse" role="tabpanel" aria-labelledby="lottery_vr"><div class="panel-body"><h6 class="flode">VR彩票</h6><ul>';
	a += "</ul></div></div></div>";
	$("#lottery_all>div:last").after(a);
	$("#lottery_vr a:contains('VR彩票')").click(function () {
		_tips_alert("", 2, "敬请期待……", "", "", 3000)
	})
}

function initThirdPartySelect(b) {
	var a = "";
	if (b == "transferType") {
		a += "<option value='0'>全部</option>"
	}
	if (thirdPartList != null && thirdPartList.length > 0) {
		thirdPartList.forEach(function (c) {
			a += "<option value=" + c.ThirdpartyValue + ">" + c.ThirdpartyText + "</option>"
		});
		$("#" + b).html(a)
	}
}

function getSecurityPromptingState(b) {
	var d = {};
	d.UserID = personObj.MyUserID;
	d.FlagType = b;
	var a = ctx + "/accountInfo/getSecurityPromptingState";
	var c = {
		message: json2str(d)
	};
	$.post(a, c, function (e) {
		_secRequest = true;
		if (e.Result) {
			if (b == 1) {
				$("#security").text("更改设置");
				$("#safe_icon").addClass("check_color");
				$("#security").unbind("click");
				$("#security").bind("click", function () {
					securityUpdate(0)
				});
				_isSecurity = 1
			} else {
				$("#loginPrompt_add").hide();
				$("#loginPrompt_edit").show()
			}
		}
	}, "json")
}

function redirect_sec() {
	_loadPage("#_first_main", ctx + "/accountInfo/first_personal_page?index=1&&secondIndex=2");
	$(".modal-backdrop.fade.in").remove()
}

function checkPayPass() {
	if (isSetPayPass) {
		$("#fpass").text("修改");
		_isBindPayPass = true;
		_payRequest = true;
		$("#passState").val("1");
		return
	}
	var a = ctx + "/accountInfo/checkPayOutPwdAndTransferPwd";
	$.post(a, function (b) {
		_payRequest = true;
		if (b.Context[0].PayOutPassWord == 0) {
			_isBindPayPass = false;
			$("#payPass").parent().parent().hide();
			$("#passState").val("0")
		} else {
			$("#fpass").text("修改");
			_isBindPayPass = true;
			$("#passState").val("1");
			isSetPayPass = true
		}
	}, "json")
}

function _check_sec_level(f, c, e) {
	var a = false;
	if (personObj.EMail) {
		a = true
	}
	var b = 20;
	var d = 1;
	clearInterval(_checkSecStatus);
	_checkSecStatus = setInterval(function () {
		if (_gaRequest && _secRequest && _payRequest) {
			if (_isBindGA) {
				$("#_ga_strength .safe_type .rank").text("强");
				$("#_ga_strength .progress_value").addClass("green");
				d += 1;
				b += 20
			}
			if (_isSecurity == 1) {
				$("#_sec_strength .safe_type .rank").text("强");
				$("#_sec_strength .progress_value").addClass("green");
				d += 1;
				b += 20
			}
			if (_isBindPayPass) {
				$("#_pay_strength .safe_type .rank").text("强");
				$("#_pay_strength .progress_value").addClass("green");
				d += 1;
				b += 20
			}
			if (a) {
				$("#_email_strength .safe_type .rank").text("强");
				$("#_email_strength .progress_value").addClass("green");
				d += 1;
				b += 20
			}
			$(f).text(b);
			$(c).find("span:lt(" + d + ")").addClass("active");
			clearInterval(_checkSecStatus)
		}
	}, e)
}

function openWindwDialog(b, d, a) {
	var c = "";
	if (document.all) {
		c = "dialogWidth:" + d + "px;dialogHeight:" + a + " px;status:no;help:no";
		window.showModalDialog(b, null, c)
	} else {
		c = "width=" + d + ",height=" + a + ",menubar=no,toolbar=no,location=no,";
		c += "scrollbars=no,status=no,modal=yes";
		window.open(b, null, c)
	}
}

function _print(a) {
	$(a).printArea()
};
