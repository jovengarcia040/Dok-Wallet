import {Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './SelectInputExchangeStyles';

const SelectInputExchange = ({
  listData,
  selectRef,
  selectedValue,
  onValueChange,
}) => {
  const renderItem = item => {
    return (
      <View style={styles.list}>
        <View style={styles.iconBox}>
          <Text>{item.options.icon}</Text>
        </View>

        <View style={styles.items}>
          <Text style={styles.titleAmount}>{item.options.page}</Text>
          <Text style={styles.text}>{item.options.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <Dropdown
        ref={selectRef}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        iconStyle={styles.iconStyle}
        maxHeight={300}
        value={selectedValue}
        data={listData}
        valueField="value"
        labelField="lable"
        onChange={item => {
          onValueChange(item.value);
        }}
        renderItem={renderItem}
        iconColor={'transparent'}
      />
    </>
  );
};

export default SelectInputExchange;
