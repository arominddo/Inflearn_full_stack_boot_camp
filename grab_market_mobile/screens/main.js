import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, Alert } from "react-native";
import React, {useEffect, useState} from "react";
import axios from "axios";
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/ko"
import Carousel from "react-native-reanimated-carousel"

import { API_URL } from "../config/constants";
import AvatarImage from "../assets/icons/avatar.png";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function MainScreen(props) {

    const [products, setProducts] = useState([]);
    const [banners, setBanners] = useState([]);

    const getProduct = () => {
        axios
            .get(`${API_URL}/products`)
            .then((result) => {
                console.log(result);
                setProducts(result.data.products)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {

        const unsubscribe = props.navigation.addListener("focus", () => {
            getProduct();

        });
       
        return unsubscribe;

    }, [props.navigation]);

    useEffect(() => {
        
        axios
        .get(`${API_URL}/banners`)
        .then((result) => {
          setBanners(result.data.banners);
        })
        .catch((error) => {
          console.error(error);
        })

    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Carousel
                    data={banners}
                    width={Dimensions.get("window").width}
                    height={200}
                    autoPlay={true}
                    sliderWidth={Dimensions.get("window").width}
                    itemWidth={Dimensions.get("window").width}
                    itemHeight={200}
                    renderItem={(obj) => {
                        return (
                            <TouchableOpacity onPress={() => { Alert.alert("배너 클릭"); }} >
                                <Image style={styles.bannerImage} source={{ uri: `${API_URL}/${obj.item.imageUrl}`}} resizeMode="contain" />
                            </TouchableOpacity>
                        );
                    }}
                />
                <Text style={styles.Headline}>판매되는 상품들</Text>
                <View sytle={styles.productList}>
                    {products.map((product, index) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate("Product", {
                                    id: product.id
                                })
                            }}>
                            <View style={styles.productCard}>
                                {product.soldout === 1 && (
                                    <View style={styles.productBlur} />
                                )}
                                <View>
                                    <Image
                                        style={styles.productImage}
                                        source={{
                                            uri: `${API_URL}/${product.imageUrl}`,
                                        }}
                                        resizeMode={"contain"}
                                    />
                                </View>
                                <View style={styles.productContents}>
                                    <Text sytle={styles.productName}>
                                        {product.name}
                                    </Text>
                                    <Text sytle={styles.productPrice}>
                                        {product.price}원
                                    </Text>
                                    <View style={styles.productFooter}>
                                        <View style={styles.productSeller}>
                                            <Image
                                                style={styles.productAvatar}
                                                source={AvatarImage}
                                            />
                                            <Text
                                                style={styles.productSellerName}
                                            >
                                                {product.seller}
                                            </Text>
                                        </View>
                                        <Text style={styles.productDate}>
                                            {dayjs(product.createdAt).fromNow()}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 32,
    },

    productCard: {
        width: 320,
        borderColor: "rgb(230,230,230)",
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: "white",
        marginBottom: 8,
    },

    productImage: {
        width: "100%",
        height: 210,
    },
    productContents: {
        padding: 8,
    },

    productSeller: {
        flexDirection: "row",
        alignItems: "center",
    },

    productAvatar: {
        width: 24,
        height: 24,
    },

    productFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 12,
    },

    productName: {
        fontSize: 16,
    },

    productPrice: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 8,
    },

    productSellerName: {
        fontSize: 16,
    },

    productDate: {
        fontSize: 16,
    },

    productList: {
        alignItems: "center",
    },

    Headline: {
        fontSize: 24,
        fontWeight: "800",
        marginBottom: 24,
    },

    productBlur: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor : "#ffffffa6",
        zIndex: 999
    },

    bannerImage: {
      width: "90%",
      height: 200,
    },

    safeAreaView: {
      flex: 1,
      backgroundColor: "#fff"

    }
});
