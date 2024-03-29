import React, {useEffect} from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import {MaterialIcons} from "@expo/vector-icons";
import {Alert, Platform} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;
`;

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  background-color: ${({theme})=> theme.imageBackground};
  border-radius: ${({rounded}) => (rounded ? 50 : 0)}px;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.imageButtonBackground};
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const ButtonIcon = styled(MaterialIcons).attrs({
    name: 'photo-camera',
    size: 22,
})`
  color: ${({theme}) => theme.imageButtonIcon};
`;

const PhotoButton = ({onPress}) => {
    return (
        <ButtonContainer onPress={onPress}>
            <ButtonIcon/>
        </ButtonContainer>
    )
}


const Image = ({url, imageStyle, rounded, showButton, onChangeImage}) => {
    useEffect(() => {
        (async () => {
                try {
                    if (Platform.OS ==='ios') {
                        const {status} = await Permissions.askAsync(
                            Permissions.CAMERA
                        );
                        if(status !== 'granted') {
                            Alert.alert(
                                'Photo Permission',
                                'Please turn on the camera roll permissions.'
                            )
                        }
                    }
                } catch (e) {
                    Alert.alert('Photo Permission Error', e.message)
                }
            }
        )();
    }, []);

    const _handleEditButton = async() => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            })
            if (!result.cancelled) {
                onChangeImage(result.uri);
            }
        } catch (e) {
            Alert.alert('photo Error', e.message)
        }
    }
    return (
        <Container>
            <StyledImage source={{uri:url}} style={imageStyle} rounded={rounded}/>
            {showButton && <PhotoButton onPress={_handleEditButton}/>}
        </Container>
    )

}
export default Image
// todo -62 : deprecated 부분 수정할 것
Image.defaultProps = {
    rounded: false,
    showButton: false,
    onChangeImage: () => {},
}

Image.propTypes = {
    url: PropTypes.string,
    imageStyle: PropTypes.object,
    rounded: PropTypes.bool,
    showButton: PropTypes.bool,
    onChangeImage: PropTypes.func,
}
