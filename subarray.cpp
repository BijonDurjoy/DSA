#include<bits/stdc++.h>
using namespace std;

int main(){
    vector<int> vec = {1,2,3,4,5};
    int n = vec.size();

    // int maxSum = 0;
    // for(int st =0; st<n; st ++){
    //     int currSum = 0;
    //     for(int end= st; end<n; end++){
    //         currSum = currSum + vec[end];
    //         maxSum = max(currSum,maxSum);
    //     }
    // }
    // cout<<maxSum<<endl;

    //Khadans algo
    int currSum =0, maxSum =0;
    for(int i=0; i<n; i++){
        currSum = currSum + vec[i];
        maxSum = max(currSum,maxSum);

        if(currSum<0){
            currSum = 0;
        }
    }
    cout<<maxSum<<endl;
    return 0;
}