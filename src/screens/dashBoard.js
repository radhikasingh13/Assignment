import React, { useState } from "react";
import { ScrollView, Text, View, Dimensions, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import CalendarPicker from 'react-native-calendar-picker';
import Tooltip from 'react-native-walkthrough-tooltip';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { BarChart } from "react-native-chart-kit";

const items = ["All", 30506, 30507, 30508, 30509, 30600]
const progress = [{ key: 0, name: 'Jan', height: 120, nhp: 94 }, { key: 1, name: 'Feb', height: 85, nhp: 130 }, { key: 2, name: 'Mar', height: 45, nhp: 170 }, { key: 3, name: 'Apr', height: 123, nhp: 90 }, { key: 4, name: 'May', height: 195, nhp: 20 }, { key: 5, name: 'Jun', height: 45, nhp: 170 }]
const time = [{name:'3m',key:2}, {name:'6m',key:5}, {name:'1yr',key:11}, {name:'2yrs',key:3}, {name:'Max',key:3}]
const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug"],
    datasets: [
        {
            data: [40, 45, 28, 80, 99, 43]
        }
    ]
};
function DashBoard() {
    const [selectedStartDate, setSelectedStartDate] = useState(null)
    function onDateChange(date) {
        setSelectedStartDate(date)
    }
    const [toolTipVisible, setToolTipVisible] = useState(false);
    const [selected, setSelected] = useState(0)
    const [pressed,setpressed] = useState(-1)
    return (
        <ScrollView style={{ backgroundColor: '#FAFAFA', paddingHorizontal: wp('8%') }}>
            <View style={{ height: hp('8%'), alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, lineHeight: 25, color: '#052027', fontFamily: 'TTNorms-Bold' }}>DashBoard</Text>
            </View>
            <View style={{}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {items?.map((item, key) => (
                        <View style={{ height: hp('3.5%'), width: wp('18%'), marginRight: 18, borderRadius: 6, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', }}>
                            <Text style={{ fontSize: 15, lineHeight: 22, color: 'black', fontFamily: 'TTNorms-Medium' }}>{item}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={{ height: hp('54%'), marginTop: 16, borderRadius: 12, backgroundColor: 'white', }}>
                <View style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', height: hp('5%'), alignItems: 'center' }}
                >
                    <Text style={{ fontSize: 16, lineHeight: 22, color: '#052027', fontFamily: 'TTNorms-Bold' }}>Stats</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, lineHeight: 11, color: '#F36821', marginRight: 5 }}>Details</Text>
                        <Feather name="arrow-right" size={12} color='#F36821' />
                    </View>
                </View>
                <View style={{ marginTop: 7, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', height: hp('28%') }}>
                    {/* <BarChart
                        // style={graphStyle}
                        data={data}
                        width={Dimensions.get('window').width}
                        height={220}
                        withHorizontalLabels={false}
                        // yAxisLabel="$"

                        withInnerLines={false}
                        showBarTops={false}
                        chartConfig={{
                            backgroundColor: "#FFFFFF",
                            backgroundGradientFrom: "#FFFFFF",
                            backgroundGradientTo: "#FFFFFF",
                            fillShadowGradientFrom: "#FFB627",
                            fillShadowGradientFromOpacity: "#FFB627",
                            fillShadowGradientToOpacity: "#FFB627",
                            barRadius: 12,
                            // decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 124, 23, 0.97))`,
                            labelColor: (opacity = 1) => `rgba(255, 124, 23, 0.97))`,
                            style: {
                                borderRadius: 16
                            },

                            propsForDots: {
                                r: "8",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}

                        verticalLabelRotation={0}
                    /> */}

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {progress?.map((item, index) => (
                            <>
                                <View style={{ marginLeft: 12, height: hp('30%'), width: wp('12%'), paddingVertical: 12, }}>
                                    <View style={{ height: item?.nhp, width: wp('12%'), }}></View>
                                    <TouchableOpacity onPress={() => {setSelected(item?.key);setToolTipVisible(true)}} style={{ height: item?.height, width: wp('12%'), borderRadius: 12, backgroundColor: selected == item?.key ? "#FFB627" : '#FBDEB5' }}>

                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 13, lineHeight: 18, color: selected == item?.key ? "#F36821" : "#C7CDDC", fontFamily: 'TTNorms-Medium' }}>{item?.name}</Text>

                                </View>
                                <Tooltip
                                    isVisible={toolTipVisible}
                                    content={<Text style={{ fontFamily: 'Poppins-Regular', color: 'grey', fontSize: 12 }}>{item?.price}$</Text>}
                                    placement="top"
                                    onClose={() => setToolTipVisible(false)}
                                >
                                    <View style={{ borderRadius: 20, backgroundColor: toolTipVisible ? "#6F7482" : 'white' }} onPress={() => setToolTipVisible(true)}>
                                        <Ionicons name="information-circle-outline" size={20} color={toolTipVisible == false ? '#6F7482' : 'white'} />
                                    </View>
                                </Tooltip></>

                        ))}
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'column', height: hp('10%'), padding: 12, }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, lineHeight: 25, color: '#052027', fontFamily: 'TTNorms-Bold' }}>Net Revenue</Text></View>
                    <View style={{ marginTop: 12, }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {time?.map((item, key) => (
                                <TouchableOpacity onPress={()=>{setSelected(item?.key);setpressed(item?.key)}} style={{ height: hp('4%'), paddingHorizontal: 12, marginRight: 20, borderRadius: 6, alignItems: 'center', justifyContent: 'center', backgroundColor:pressed == item?.key?'white': '#FBDEB530',elevation:pressed== item?.key?2:0 }}>
                                    <Text style={{ fontSize: 15, lineHeight: 22, color:pressed== item?.key?"#F36821": 'black', fontFamily: 'TTNorms-Medium' }}>{item?.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{ height: hp('14%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <AnimatedCircularProgress
                                size={60}
                                width={3}
                                fill={61}
                                tintColor="#FFB627"
                                backgroundColor="#FBDEB5">
                                {
                                    (fill) => (
                                        <Text style={{ color: '#FFB627', fontSize: 12, lineHeight: 18, fontFamily: 'TTNorms-Bold' }}>
                                            {fill ? fill : 0}%
                                        </Text>
                                    )
                                }
                            </AnimatedCircularProgress>
                            <Text style={{ fontSize: 16, lineHeight: 22, color: '#1A1A1A', fontFamily: 'TTNorms-Medium' }}>Avg Room Rate</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ fontSize: 21, lineHeight: 29, color: '#F5B42B', fontFamily: 'TTNorms-Bold', }}>7,338</Text>
                                <Text style={{ fontSize: 16, lineHeight: 22, color: '#1A1A1A', fontFamily: 'TTNorms-Medium' }}>Avg Room Rate</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ height: hp('40%'), marginTop: 16, borderRadius: 12, backgroundColor: 'white', }}>
                <View style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', height: hp('5%'), alignItems: 'center' }}
                >
                    <Text style={{ fontSize: 16, lineHeight: 22, color: '#052027', fontFamily: 'TTNorms-Bold', }}>Bookings</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, lineHeight: 11, color: '#F36821', marginRight: 4 }}>Details</Text>
                        <Feather name="arrow-right" size={12} color='#F36821' />
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 7 }}>
                    <CalendarPicker
                        height={hp('35%')}
                        width={wp('100%')}
                        onDateChange={onDateChange}
                        previousComponent={() => {
                            return (
                                <Ionicons name="bag" size={24} color='red' />
                            )
                        }}
                        selectedDayColor={'#E9511D'}
                    />
                </View>
                <View style={{ flexDirection: 'row', height: hp('4%'), padding: 12 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="ellipse" size={8} color='red' />
                        <Text style={{ marginLeft: 6, fontSize: 10, lineHeight: 11, color: 'black', fontFamily: 'TTNorms-Medium', }}>Nights Booked</Text>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 12 }}>
                        <Ionicons name="ellipse" size={8} color='green' />
                        <Text style={{ marginLeft: 6, fontSize: 10, lineHeight: 11, color: 'black', fontFamily: 'TTNorms-Medium', }}>Nights Available</Text>

                    </View>
                </View>
            </View>
            <View style={{ marginTop: 16, height: hp('28%') }}>
                <Text style={{ fontSize: 18, lineHeight: 25, color: '#052027', fontFamily: 'TTNorms-Bold', marginLeft: 16 }}>Discover</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {items?.map((item, key) => (
                        <View style={{ elevation: 4, height: hp('34%'), width: wp('50%'), marginRight: 12, borderRadius: 16, backgroundColor: 'white', padding: 12 }}>
                            <View style={{ flex: 1 }}>
                                <Image
                                    source={require("../image/Mask_Group.png")}
                                    style={{
                                        // height: 40,
                                        // width: 40,
                                        // borderRadius: 10,
                                        // borderWidth: 1,
                                        // borderColor: "#D9D9D9",
                                        // resizeMode: "cover",
                                    }}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 16, lineHeight: 22, color: '#1E293B', fontFamily: 'TTNorms-Bold' }}>Bohemia Rapper</Text>
                                <View style={{ flexDirection: 'row' }}><View style={{ backgroundColor: '#FBDEB5', height: hp('2%'), width: wp('16%'), justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 9, lineHeight: 11, color: '#1E293B', fontFamily: 'TTNorms-Medium' }}>12/10/2023</Text>
                                </View>
                                    <View style={{ marginLeft: 9, backgroundColor: '#FBDEB5', height: hp('2%'), width: wp('16%'), justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 9, lineHeight: 11, color: '#1E293B', fontFamily: 'TTNorms-Medium' }}>12/10/2023</Text>
                                    </View></View>
                                <Text style={{ marginTop: 12, fontSize: 10, lineHeight: 11, color: 'black', fontFamily: 'TTNorms-Normal' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>

                                <View style={{ marginTop: 8, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 10, lineHeight: 11, color: '#F36821', fontFamily: 'TTNorms-Normal', marginRight: 5 }}>Details</Text>
                                    <Feather name="arrow-right" size={12} color='#F36821' />
                                </View>
                            </View>

                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10, height: hp('6%'), paddingHorizontal: 12, elevation: 5, borderRadius: 8, backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ flex: 2, fontSize: 18, lineHeight: 25, color: '#052027', fontFamily: 'TTNorms-Bold' }}>Contact us</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                    <FontAwesome name="whatsapp" size={20} color='green' />
                    <Ionicons name="mail" size={20} color='#01F1FE' />
                    <Ionicons name="call" size={20} color='#2196F3' />
                </View>
            </View>
        </ScrollView>
    );
}

export default DashBoard;