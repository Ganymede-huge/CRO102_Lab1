import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const { height } = Dimensions.get('window');

const Bai2 = () => {
  const [expandedSection, setExpandedSection] = useState('');

  const toggleExpand = section => {
    setExpandedSection(section === expandedSection ? '' : section);
  };

  const sections = [
    {
      key: 'schedule',
      title: 'Lịch trình',
      items: [
        {
          location: 'Plaza, Sydney',
          time: '06:00 AM - 10:00 AM, 8/3/2024',
          trans: 'Xe ô tô',
          image: '../image/opera_house.jpg',
        },
      ],
    },
    {
      key: 'other',
      title: 'Khách sạn',
      items: [
        {
          name: 'Ha Noi',
          time: '06:00 AM - 12:00 AM, 8/3/2024',
          location: '96 Opera Street',
          names: 'Phung Xuan Giang'
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      {sections.map(section => (
        <View key={section.key}>
          <TouchableOpacity
            onPress={() => toggleExpand(section.key)}
            style={[
              styles.sectionHeader,
              {
                backgroundColor:
                  expandedSection === section.key ? '#faa' : 'lightgrey',
              },
            ]}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          </TouchableOpacity>
          {expandedSection === section.key && (
            <View style={styles.itemContainer}>
              {section.items.map((item, index) => (
                <View key={index} style={[styles.item, { elevation: 0.5 }]}>
                  {index === 0 && section.key === 'schedule' ? (
                    <View
                      style={{
                        borderRadius: 8,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                      }}>
                      <Text>Địa điểm</Text>
                      <Text style={styles.fontText}>{item.location}</Text>
                      <Text>Thời gian</Text>
                      <Text style={styles.fontText}>{item.time}</Text>
                      <Text>Phương tiện</Text>
                      <Text style={styles.fontText}>{item.trans}</Text>

                      <Text>Ảnh</Text>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginBottom: 30,
                          marginTop: 10
                        }}>
                        <Image
                          source={require('../image/opera_house.jpg')}
                          style={styles.image}
                        />
                      </View>
                    </View>
                  ) : (
                    <View
                      style={{
                        borderRadius: 8,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                      }}>
                      <Text>Tên khách sạn</Text>
                      <Text style={styles.fontText}>{item.name}</Text>
                      <Text>Thời gian mở</Text>
                      <Text style={styles.fontText}>{item.time}</Text>
                      <Text>Địa điểm</Text>
                      <Text style={styles.fontText}>{item.location}</Text>
                      <Text>Tên khách hàng</Text>
                      <Text style={styles.fontText}>{item.names}</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    padding: 10,
    backgroundColor: 'lightgrey',
  },
  sectionHeaderText: {
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    padding: 15,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  image: {
    width: 300,
    height: 180,
    borderRadius: 20,
  },
  fontText: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default Bai2;