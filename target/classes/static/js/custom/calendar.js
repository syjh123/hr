jQuery(document).ready(function() {
		/* initialize the external events */
		jQuery('#external-events div.external-event').each(function() {
		
			// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
			// it doesn't need to have a start or end
			var eventObject = {
				title: jQuery.trim(jQuery(this).text()) // use the element's text as the event title
			};
			
			// store the Event Object in the DOM element so we can get to it later
			jQuery(this).data('eventObject', eventObject);
			
			// make the event draggable using jQuery UI
			jQuery(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});
			
		});
	
	
		/* initialize the calendar */
		var mycalendar = jQuery('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: false,
			droppable: true, // this allows things to be dropped onto the calendar !!!
			weekends:true,
			minTime:0,
			maxTime:24,
			allDayText:'今天的日历',
			axisFormat:'h(:mm)tt',
			titleFormat:{
			    month: 'yyyy MMMM',                             // September 2009
			    week: "yyyy MMM d[ yyyy]{ '&#8212;'[ MMM] d }", // Sep 7 - 13 2009
			    day: 'yyyy MMM d , dddd'                  // Tuesday, Sep 8, 2009
			},
			monthNames:['一月','二月', '三月', '四月', '五月', '六月', '七月','八月', '九月', '十月', '十一月', '十二月'],
			monthNamesShort:['一月','二月', '三月', '四月', '五月', '六月', '七月','八月', '九月', '十月', '十一月', '十二月'],
			dayNames:['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
			dayNamesShort:['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
			buttonText:{
				prev:     '昨天',
				next:     '明天',
				prevYear: '去年',
				nextYear: '明年',
				today:    '今天',
				month:    '月',
				week:     '周',
				day:      '日'
			},
			events: "../../office/calendarJson",
			dayClick: function(date, allDay, jsEvent, view) {
		        /*if (allDay) {
		            alert('Clicked on the entire day: ' + date);
		        }else{
		            alert('Clicked on the slot: ' + date);
		        }
		        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
		        alert('Current view: ' + view.name);*/
		        // change the day's background color just for fun
		        var mydialog = $.dialog.open("../../follow/calendarInput/" + date.getTime(),{
					title:	"新增日历",
					width:	'420px',
					height:	'180px',
					ok: function () {
						var iframe = this.iframe.contentWindow;
				    	if (!iframe.document.body) {
				        	alert("对不起，数据还在加载中.");
				        	return false;
				        };
				        var frm = iframe.document.getElementById("followFrm");
				        
			        	if(frm.cmfoContent.value==''){
			        		alert("请填写日历内容。");
			        		frm.cmfoContent.focus();
			        		return false;
			        	}
			        	
			        	var data = $(frm).formToArray();
		        		$.post("../../follow/save?rand="+new Date(), data, function(result){
		        			if(result=='ok'){
		        				$('#calendar').fullCalendar("refetchEvents");
		        				mydialog.close();
		        			}else{
		        				$.dialog.alert(result);
		        				_confirm.close();
		        			}
		        		})
				    	return false;
					},
					cancelVal: '关闭',
					cancel: true
				});
				
				return false;
		    },
		    eventClick: function(calEvent, jsEvent, view) {
				/*ShowObjProperty(jsEvent);
				alert('EventId: ' + calEvent.id);
		        alert('Event: ' + calEvent.title);
		        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
		        alert('View: ' + view.name);*/
		        var title = "";
		        if(calEvent.title.length>8){
		        	title = calEvent.title.substring(0,8) + "...";
		        }else{
		        	title = calEvent.title;
		        }
		
				if(calEvent.state=="0"){
	            	var detailDialog = $.dialog.open("../../follow/show/" + calEvent.id,{
						title:	title,
						id:		"follow_" + calEvent.id,
						lock:	false,
						width:	'420px',
						height:	'220px',
						cancelVal: '关闭',
						cancel: true,
						button:[{
							name: '删除',
							callback: function () {
					        	var _confirm = $.dialog.confirm('你确认要删除此日历吗？', function(){
					        		$.post("../../follow/delete/"+ calEvent.id +"?rand="+new Date(), function(result){
					        			if(result=='success'){
					        				$('#calendar').fullCalendar("refetchEvents");
					        				_confirm.close();
			        						detailDialog.close();
					        			}else{
					        				$.dialog.alert(result);
					        				_confirm.close();
					        			}
					        		})
							    	return false;
								});
								return false;
				            }
				         	},
				            {
							name: '已处理',
							callback: function () {
					        	$.post("../../follow/state/"+ calEvent.id +"?rand="+new Date(), function(result){
				        			if(result=='success'){
				        				$('#calendar').fullCalendar("refetchEvents");
		        						detailDialog.close();
				        			}else{
				        				$.dialog.alert(result);
				        			}
				        		})
						    	return false;
				            }
						}]
					});
	            }else{
			        var detailDialog = $.dialog.open("../../follow/show/" + calEvent.id,{
						title:	title,
						id:		"follow_" + calEvent.id,
						lock:	false,
						width:	'420px',
						height:	'220px',
						cancelVal: '关闭',
						cancel: true,
						button:[{
							name: '删除',
							callback: function () {
					        	var _confirm = $.dialog.confirm('你确认要删除此日历吗？', function(){
					        		$.post("../../follow/delete/"+ calEvent.id +"?rand="+new Date(), function(result){
					        			if(result=='success'){
					        				$('#calendar').fullCalendar("refetchEvents");
					        				_confirm.close();
			        						detailDialog.close();
					        			}else{
					        				$.dialog.alert(result);
					        				_confirm.close();
					        			}
					        		})
							    	return false;
								});
								return false;
				            }
						}]
					});
				}
				return false;
		    },
			drop: function(date, allDay) { // this function is called when something is dropped
				//alert(new Date().getHours());
				//alert($.fullCalendar.formatDate(date, "yyyy-MM-dd"));
				// retrieve the dropped element's stored Event Object
				var originalEventObject = jQuery(this).data('eventObject');
				
				// we need to copy it, so that multiple events don't have a reference to the same object
				var copiedEventObject = jQuery.extend({}, originalEventObject);
				
				// assign it the date that was reported
				copiedEventObject.start = date;
				copiedEventObject.allDay = allDay;
				
				//alert(copiedEventObject.title);
				
				// render the event on the calendar
				// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
				//jQuery('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
				
				// is the "remove after drop" checkbox checked?
				var vDate = $.fullCalendar.formatDate(date, "yyyy-MM-dd");
				vDate += " " + new Date().getHours() + ":" + new Date().getMinutes();
				//jQuery(this).remove();
				$.post("../../follow/save?rand="+new Date(), {cmfoType:9, cmfoContent:copiedEventObject.title, remindDate:vDate, cmfoIsRemind:1}, function(result){
        			if(result=='ok'){
        				$('#calendar').fullCalendar("refetchEvents");
        			}else{
        				$.dialog.alert(result);
        			}
        		})
				
			},
			eventDragStop:function(calEvent, jsEvent, ui, view){ 
				alert('拖拽结束'); 
			} 
		});
});

function ShowObjProperty(Obj) 
{ 
var PropertyList=''; 
var PropertyCount=0; 
for(i in Obj){ 
if(Obj.i !=null) 
PropertyList=PropertyList+i+'属性：'+Obj.i+'\r\n'; 
else 
PropertyList=PropertyList+i+'方法\r\n'; 
} 
alert(PropertyList); 
}